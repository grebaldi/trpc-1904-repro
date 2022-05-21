import Fastify from "fastify";
import { makeApi } from "./trpc";

const fastify = Fastify({ logger: true });

fastify.register(
  makeApi({
    configuration: {
      appName: "trpc-1904-repro",
    },
  })
);

fastify.listen(3000);