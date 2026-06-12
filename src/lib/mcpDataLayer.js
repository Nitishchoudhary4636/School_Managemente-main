export function pushMcpData(mcpPayload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ MCP: mcpPayload });
}

export function getMcpDataForPath(pathname) {
  if (pathname === "/") {
    return { pageName: "Home", pageType: "Home" };
  }

  if (pathname === "/courses") {
    return {
      pageType: "Category",
      itemListId: "school-courses",
      itemListName: "Course Catalog",
    };
  }

  if (pathname === "/contact" || pathname === "/contact-us") {
    return { pageType: "Contact" };
  }

  if (pathname === "/apply" || pathname === "/online-application") {
    return { pageType: "login" };
  }

  return {
    pageType: "default",
    pageName: pathname.replace(/^\//, "") || "default",
  };
}

export function buildCourseMcpData(course) {
  return {
    pageType: "Product",
    currency: "INR",
    Item: {
      id: course.id,
      name: course.title,
      description: course.description,
      imageUrl: course.img,
      url: `/courses/${course.id}`,
      price: course.price ?? 15000,
      availability: "Available",
      category: course.department,
      color: course.level,
      size: course.campus,
    },
  };
}
