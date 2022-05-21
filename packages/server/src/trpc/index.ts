import type { FastifyPluginCallback } from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";

import { createContext } from "./context";
import { makeApplicationRouter } from "./router";

export const makeApi = (deps: {
  configuration: {
    appName: string;
  };
}): FastifyPluginCallback => {
  return (fastify, _, done) => {
    fastify.register(fastifyTRPCPlugin, {
      trpcOptions: { router: makeApplicationRouter(deps), createContext },
    });
    done();
  };
};
