import { router } from "@trpc/server";
import * as rt from "runtypes";

export const makeEchoRoute = (deps: {
  configuration: {
    appName: string;
  };
}) => {
  return router().mutation("echo", {
    input: rt.Record({
      message: rt.String,
    }).check,
    resolve: ({ input }) =>
      `${deps.configuration.appName} echoes: ${input.message}`,
  });
};
