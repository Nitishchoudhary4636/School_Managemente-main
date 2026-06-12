console.log(" Sitemap — Resilient Version06");

(function () {
  const DEFAULT_WAIT_TIMEOUT = 5000;
  const DEFAULT_WAIT_INTERVAL = 80;

  function getDataLayerValue(path) {
    if (!Array.isArray(window.dataLayer)) return null;
    for (var i = 0; i < window.dataLayer.length; i++) {
      var obj = window.dataLayer[i];
      var current = obj;
      for (var j = 0; j < path.length; j++) {
        if (current && current[path[j]] !== undefined) {
          current = current[path[j]];
        } else {
          current = null;
          break;
        }
      }
      if (current !== null && current !== undefined) {
        return current;
      }
    }
    return null;
  }

  function getCartItems() {
    const items = getDataLayerValue(["MCP", "items"]) || [];
    const currency = getDataLayerValue(["MCP", "currency"]) || "GBP";
    return items
      .map((it) => ({
        catalogObjectType: "Product",
        catalogObjectId: it.item_id || it.id || null,
        price: parseFloat(it.price) || 0,
        quantity: parseInt(it.quantity, 10) || 0,
        attributes: {
          sku: it.item_sku || it.id,
          name: it.item_name || it.name || "",
          currency: currency,
        },
      }))
      .filter((i) => !!i.catalogObjectId);
  }

  function waitForElement(selector, timeout = DEFAULT_WAIT_TIMEOUT, interval = DEFAULT_WAIT_INTERVAL) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      function check() {
        try {
          const el = document.querySelector(selector);
          if (el) return resolve(el);
        } catch (e) {}
        if (Date.now() - start >= timeout) {
          return reject(new Error("Timeout waiting for element: " + selector));
        }
        setTimeout(check, interval);
      }
      check();
    });
  }

  function resolveSelectorWithFallback(selectors, timeout = DEFAULT_WAIT_TIMEOUT) {
    if (!selectors) return Promise.reject(new Error("No selector provided"));
    const list = Array.isArray(selectors) ? selectors : [selectors];

    return new Promise((resolve, reject) => {
      const start = Date.now();

      function tryNext(index) {
        if (index >= list.length) {
          const fallback = list[0];
          waitForElement(fallback, Math.max(0, timeout - (Date.now() - start)))
            .then(() => resolve(fallback))
            .catch(() => reject(new Error("None of the selectors appeared: " + JSON.stringify(list))));
          return;
        }

        const sel = list[index];
        try {
          if (document.querySelector(sel)) {
            return resolve(sel);
          }
        } catch (e) {}

        if (Date.now() - start >= timeout) {
          const fallback = list[0];
          waitForElement(fallback, 0)
            .then(() => resolve(fallback))
            .catch(() => reject(new Error("Timeout trying fallback selectors: " + JSON.stringify(list))));
          return;
        }

        setTimeout(() => tryNext(index + 1), 60);
      }

      tryNext(0);
    });
  }

  function waitForDataLayerValue(path, timeout = 3000, interval = 80) {
    timeout = timeout || 3000;
    interval = interval || 80;
    return new Promise(function (resolve, reject) {
      var start = Date.now();
      function check() {
        var value = getDataLayerValue(path);
        if (value !== null && value !== undefined) {
          resolve(value);
        } else if (Date.now() - start >= timeout) {
          reject(new Error("Timeout waiting datalayer: " + path.join(".")));
        } else {
          setTimeout(check, interval);
        }
      }
      check();
    });
  }

  if (typeof SalesforceInteractions === "undefined") {
    console.warn("SalesforceInteractions not loaded — sitemap skipped.");
    return;
  }

  SalesforceInteractions.init({
    cookieDomain: window.location.hostname,
  }).then(function () {
    var sitemapConfig = {
      global: {
        contentZones: [
          { name: "global_survey_feedback" },
          { name: "global_header", selector: ["header.navbar", "header.site-header"] },
          { name: "global_footer", selector: ["footer.footer", "footer.site-footer"] },
          {
            name: "global_Product_recommendation",
            selector: ["#product-recommendation", ".global-product-recommendation"],
          },
          { name: "global_welcome" },
          { name: "global_exit_intent" },
        ],
      },

      pageTypeDefault: {
        name: "default",
        interaction: { name: "Default Page" },
      },

      pageTypes: [
        {
          name: "home",
          isMatch: function () {
            return waitForDataLayerValue(["MCP", "pageName"], 2000, 80)
              .then((pt) => pt === "Home")
              .catch(() => false);
          },
          interaction: { name: "Home Page" },
          contentZones: [
            { name: "home_recommendation", selector: ".featured-products" },
            { name: "home_banner", selector: "#hero" },
          ],
        },

        {
          name: "category",
          isMatch: function () {
            return waitForDataLayerValue(["MCP", "itemListId"], 2000, 80)
              .then(function (listId) {
                return listId !== null && listId !== undefined;
              })
              .catch(function () {
                return false;
              });
          },
          interaction: {
            name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
            catalogObject: {
              type: "Category",
              id: function () {
                return getDataLayerValue(["MCP", "itemListId"]) || "unknown_category";
              },
              attributes: {
                name: function () {
                  return getDataLayerValue(["MCP", "itemListName"]) || null;
                },
                url: SalesforceInteractions.resolvers.fromHref(),
              },
            },
          },
          contentZones: [
            {
              name: "plp_recommendation",
              selector: function () {
                return resolveSelectorWithFallback(
                  [".products-section", ".plp-products", ".product-list"],
                  4000
                );
              },
            },
          ],
        },

        {
          name: "pdp",
          isMatch: function () {
            return waitForDataLayerValue(["MCP", "pageType"], 2000, 80)
              .then(function (pt) {
                return pt === "Product";
              })
              .catch(function () {
                return false;
              });
          },
          interaction: {
            name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
            catalogObject: {
              type: "Product",
              id: function () {
                return getDataLayerValue(["MCP", "Item", "id"]);
              },
              attributes: {
                sku: {
                  id: function () {
                    return getDataLayerValue(["MCP", "Item", "id"]);
                  },
                },
                name: function () {
                  return getDataLayerValue(["MCP", "Item", "name"]);
                },
                description: function () {
                  return getDataLayerValue(["MCP", "Item", "description"]);
                },
                imageUrl: function () {
                  var img = getDataLayerValue(["MCP", "Item", "imageUrl"]);
                  if (!img) {
                    console.warn("MCP Item imageUrl missing — returning fallback image.");
                    return window.location.origin + "/default.jpg";
                  }
                  if (img.indexOf("http") === 0) {
                    return img;
                  }
                  return window.location.origin + img;
                },
                url: function () {
                  return getDataLayerValue(["MCP", "Item", "url"]);
                },
                currency: function () {
                  return getDataLayerValue(["MCP", "currency"]) || "INR";
                },
                inventoryCount: 1,
                price: function () {
                  return getDataLayerValue(["MCP", "Item", "price"]) || 0;
                },
                availability: function () {
                  return getDataLayerValue(["MCP", "Item", "availability"]);
                },
              },
              relatedCatalogObjects: {
                Category: function () {
                  var cat = getDataLayerValue(["MCP", "Item", "category"]);
                  return cat ? [cat] : [];
                },
                Color: function () {
                  var c = getDataLayerValue(["MCP", "Item", "color"]);
                  return Array.isArray(c) ? c : c ? [c] : [];
                },
                Size: function () {
                  var s = getDataLayerValue(["MCP", "Item", "size"]);
                  return Array.isArray(s) ? s : s ? [s] : [];
                },
              },
            },
          },
          contentZones: [{ name: "pdp_recommendation", selector: "#pdp_recommendation" }],
          listeners: [
            SalesforceInteractions.listener("click", ".btn-large", () => {
              const id = getDataLayerValue(["MCP", "Item", "id"]);
              const price = getDataLayerValue(["MCP", "Item", "price"]) || 0;
              const name = getDataLayerValue(["MCP", "Item", "name"]);

              if (!id) {
                console.warn("AddToCart failed — product ID missing in MCP.Item.id");
                return;
              }

              const lineItem = {
                catalogObjectType: "Product",
                catalogObjectId: id,
                quantity: 1,
                price: price,
                attributes: {
                  name: name,
                  sku: { id: id },
                },
              };

              SalesforceInteractions.sendEvent({
                interaction: {
                  name: SalesforceInteractions.CartInteractionName.AddToCart,
                  lineItem: lineItem,
                },
              });
            }),
          ],
        },

        {
          name: "Cart page",
          isMatch: function () {
            return waitForDataLayerValue(["MCP", "pageType"], 2000, 80)
              .then(function (pt) {
                return pt === "Cart";
              })
              .catch(function () {
                return false;
              });
          },
          interaction: {
            name: SalesforceInteractions.CartInteractionName.ReplaceCart,
          },
        },

        {
          name: "checkout",
          isMatch: function () {
            return waitForDataLayerValue(["MCP", "pageType"], 5000, 50)
              .then((pt) => pt === "view_checkout")
              .catch(() => false);
          },
          interaction: {
            name: "Checkout",
            lineItem: function () {
              var items = getDataLayerValue(["MCP", "items"]) || [];
              return items.map(function (item) {
                return {
                  catalogObjectType: "Product",
                  catalogObjectId: item.item_id || "unknown_id",
                  quantity: parseInt(item.quantity) || 1,
                  price: parseFloat(item.price) || 0,
                  attributes: {
                    name: item.item_name || "",
                    color: item.color || "",
                    size: item.size || "",
                    imageUrl: item.imageUrl || "",
                    url: item.url || window.location.href,
                    index: item.index || "0",
                    sku: { id: item.item_id || "" },
                  },
                };
              });
            },
          },
          listeners: [
            SalesforceInteractions.listener("click", ".checkout-btn", () => {
              var firstName = SalesforceInteractions.cashDom("#fullName").val();
              var phone = SalesforceInteractions.cashDom("#phone").val();
              var address = SalesforceInteractions.cashDom("#address").val();
              var city = SalesforceInteractions.cashDom("#city").val();
              var state = SalesforceInteractions.cashDom("#state").val();
              var pincode = SalesforceInteractions.cashDom("#pincode").val();

              SalesforceInteractions.sendEvent({
                interaction: { name: "Payment Initiated" },
                user: {
                  attributes: {
                    firstName: firstName,
                    phone: phone,
                    addressLine1: address,
                    city: city,
                    stateProvince: state,
                    postalCode: pincode,
                  },
                },
              });
            }),
          ],
        },

        {
          name: "orders",
          isMatch: () => window.location.pathname === "/orders",
          interaction: {
            name: "Orders Page",
          },
        },

        {
          name: "login",
          isMatch: function () {
            return waitForDataLayerValue(["MCP", "pageType"], 2000, 80)
              .then(function (pt) {
                return pt === "login";
              })
              .catch(function () {
                return false;
              });
          },
          interaction: {
            name: "Login Page",
          },
          listeners: [
            SalesforceInteractions.listener("submit", "#authForm", function () {
              const email = SalesforceInteractions.cashDom("#email").val().trim();
              const firstName = SalesforceInteractions.cashDom("#name").val().trim();
              const phone = SalesforceInteractions.cashDom("#phone").val().trim();
              const marketingOptIn = SalesforceInteractions.cashDom("#chkOffersChecked").is(":checked");

              if (email) {
                SalesforceInteractions.sendEvent({
                  interaction: { name: "Register/Login User" },
                  user: {
                    identities: { emailAddress: email },
                    attributes: {
                      firstName: firstName || "",
                      phone: phone || "",
                      marketingOptIn: marketingOptIn,
                    },
                  },
                });
              }
            }),
          ],
        },

        {
          name: "contact",
          isMatch: function () {
            return waitForDataLayerValue(["MCP", "pageType"], 2000, 80)
              .then(function (pt) {
                return pt === "Contact";
              })
              .catch(function () {
                return false;
              });
          },
          interaction: {
            name: "Viewed Contact Us Page",
          },
          contentZones: [
            {
              name: "contact_us",
              selector: function () {
                return resolveSelectorWithFallback(
                  [".contact-form-section", "#contact", ".contact-us"],
                  4000
                );
              },
            },
          ],
          listeners: [
            SalesforceInteractions.listener("submit", "#authForm", function () {
              const email = SalesforceInteractions.cashDom("#email").val().trim();
              const firstName = SalesforceInteractions.cashDom("#name").val().trim();
              const phone = SalesforceInteractions.cashDom("#phone").val().trim();
              const marketingOptIn = SalesforceInteractions.cashDom("#chkOffersChecked").is(":checked");

              if (email) {
                SalesforceInteractions.sendEvent({
                  interaction: { name: "Register/Login User" },
                  user: {
                    identities: { emailAddress: email },
                    attributes: {
                      firstName: firstName || "",
                      phone: phone || "",
                      marketingOptIn: marketingOptIn,
                    },
                  },
                });
              }
            }),
          ],
        },
      ],
    };

    SalesforceInteractions.initSitemap(sitemapConfig);
  });
})();
