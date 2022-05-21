import { router } from "@trpc/server";

import { makeEchoRoute } from "./routes/echo";

export const makeApplicationRouter = (deps: {
  configuration: {
    appName: string;
  };
}) => router().merge(makeEchoRoute(deps));

export type CommandRouter = ReturnType<typeof makeApplicationRouter>;
