import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";

const app = new Application();
app.use(({ request }, next) => {
    const data = { 
        site: "( ͡° ͜ʖ ͡°) Perjantai...", 
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

export { app };