import "reflect-metadata";

import { courseListController } from "@/features/course-list/controller";
import { createContext, sharedRouter, t } from "@/kernel/lib/trpc/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: t.mergeRouters(sharedRouter, courseListController),
    createContext: createContext,
  });

export { handler as GET, handler as POST };
