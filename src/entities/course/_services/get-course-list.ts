import { coursesRepository } from "../_repositories/course";

type GetCourseList = {};

export class GetCourseListService {
  async exec(data?: GetCourseList) {
    return coursesRepository.getCourseList();
  }
}

export const getCourseListService = new GetCourseListService();
