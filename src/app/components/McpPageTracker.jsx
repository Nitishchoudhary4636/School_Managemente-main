"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getMcpDataForPath, pushMcpData } from "@/lib/mcpDataLayer";

export default function McpPageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/courses/")) return;
    pushMcpData(getMcpDataForPath(pathname));
  }, [pathname]);

  return null;
}
