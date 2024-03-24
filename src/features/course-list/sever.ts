import { ContainerModule } from "inversify";
import { CourseListController } from "./_controller";

export const CourseListModule = new ContainerModule((bind) => {
  bind(CourseListController).toSelf();
});

export { CourseListController };
