import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

const monitoringMiddleware = ({ request }, next) => {
  const data = {
    site: "epic-demo-site",
    data: {
      method: request.method,
      path: request.url.pathname,
    },
  };

  fetch("https://deno-simple-monitoring.herokuapp.com/api/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  next();
};

const renderMiddleware = async (context, next) => {
  configure({
    views: `${Deno.cwd()}/views/`,
  });

  context.render = async (file, data) => {
    context.response.headers.set("Content-Type", "text/html; charset=utf-8");
    context.response.body = await renderFile(file, data);
  };

  await next();
};

export { monitoringMiddleware, renderMiddleware };