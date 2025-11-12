const routes = [
  {
    src: "jumpstart",
    dst: "https://rangho-jumpstart.vercel.app/api/",
  },
];

export default {
  async fetch(request, env, ctx): Promise<Response> {
    return new Response("Hello World!");
  },
} satisfies ExportedHandler<Env>;
