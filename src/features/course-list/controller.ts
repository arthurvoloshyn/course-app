import {
  createPublicServerApi,
  publicProcedure,
  router,
} from "@/kernel/lib/trpc/server";
import { compileMDX } from "@/shared/lib/mdx/server";
import { getCourseListService } from "@/entities/course/course.server";

export const courseListController = router({
  courseList: router({
    get: publicProcedure.query(async () => {
      const courseList = await getCourseListService.exec();

      const compiledCourses = await Promise.all(
        courseList.map(async (course) => ({
          ...course,
          description: await compileMDX(course.description).then((r) => r.code),
        })),
      );

      return compiledCourses;
    }),
  }),
});

export type CourseListController = typeof courseListController;

export const courseListServerApi = createPublicServerApi(courseListController);
