import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { makeHTMLPage } from "https://deno.land/x/html_page/mod.ts";

const router = new Router();

router.get("/", async (context) => {
  context.response.body = makeHTMLPage({
    body: `<h1>Hello Deno 🦕</h1>`,
    title: 'html_page',
  });
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8002 });
