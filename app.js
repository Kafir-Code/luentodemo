import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import { router } from "./routes/routes.js";
import * as middlewares from "./middlewares/middlewares.js";

const app = new Application();
app.use(middlewares.monitoringMiddleware);
app.use(middlewares.renderMiddleware);
app.use(router.routes());
/*
const app = new Application();
app.use(({ request }, next) => {
    const data = { 
        site: "( ͡° ͜ʖ ͡°) '..Toss a coin to your witcher..'", 
        data: { 
            //method: request.method, 
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
});

app.use((context, next) => {
    context.response.body = "Arto, täähän toimii! :o - Koska syödään??";
});
*/
export { app };