import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";

const app = new Application();
app.use((context, next) => {
    const data = { 
        site: "pyttipannu", 
        data: { method: context.request.method, path: context.request.path 
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