const baseUrl = "by.rangho.dev";

const routes = [
  {
    src: "/jumpstart",
    dst: "https://rangho-jumpstart.vercel.app/api",
  },
  {
    src: "/repository",
    dst: "https://rangho-repository.netlify.app",
  },
];

async function work(request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
  const requestUrl = new URL(request.url);
  if (requestUrl.host !== baseUrl) {
    return Response.redirect(requestUrl.href, 302);
  }
  
  const requestSrc = requestUrl.pathname;

  const target = routes.find(route => requestSrc.startsWith(route.src));
  if (!target) {
    return new Response(`Unknown route: ${requestSrc}`, {
      status: 404,
      statusText: "Not Found",
    });
  }

  const subdirectory = requestSrc.replace(`${target.src}`, "");
  const responseUrl = new URL(target.dst + subdirectory + requestUrl.search);
    return await fetch(responseUrl);
}

export default {
  fetch: work
} satisfies ExportedHandler<Env>;
