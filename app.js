import { Application } from "https://deno.land/x/oak@v10.0.0/mod.ts";

const app = new Application();
app.use((context, next)) => {
    context.response.body = "Hello World";
});

await app.listen({port: 3000});