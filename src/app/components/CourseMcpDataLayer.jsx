"use client";

import { useEffect } from "react";
import { buildCourseMcpData, pushMcpData } from "@/lib/mcpDataLayer";

export default function CourseMcpDataLayer({ course }) {
  useEffect(() => {
    pushMcpData(buildCourseMcpData(course));
  }, [course.id]);

  return null;
}
