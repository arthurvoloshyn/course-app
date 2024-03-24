import { createApi } from "@/kernel/lib/trpc/client";
import { CourseListController } from "./controller";

export const courseListApi = createApi<CourseListController>();
