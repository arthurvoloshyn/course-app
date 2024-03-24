import { CourseListClient } from "./_ui/course-list";
import { courseListServerApi } from "./controller";

export async function CourseList() {
  const courseList = await courseListServerApi.courseList.get.fetch();

  return <CourseListClient defaultList={courseList} />;
}
