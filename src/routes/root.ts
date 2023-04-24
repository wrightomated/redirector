import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("*", async function (request, reply) {
    return `${request.protocol}://${request.hostname}${request.url}`;
    // reply.redirect("https://google.com");
  });
};

export default root;
