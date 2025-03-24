// _worker.js - Force Cloudflare Pages to use Node.js 18.18.0
export default {
    async fetch(request, env) {
      return new Response("Hello from Cloudflare Workers!", {
        headers: { "content-type": "text/plain" },
      });
    },
  };