"use client";

import { useEffect } from "react";
import { pushMcpData } from "@/lib/mcpDataLayer";

export default function McpDataLayer({ data }) {
  useEffect(() => {
    if (data) {
      pushMcpData(data);
    }
  }, [data]);

  return null;
}
