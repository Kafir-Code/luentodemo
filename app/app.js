import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import { router } from "./routes/routes.js";
import * as middlewares from "./middlewares/middlewares.js";

const app = new Application();
app.use(middlewares.monitoringMiddleware);
app.use(middlewares.renderMiddleware);
app.use(router.routes());

export { app };