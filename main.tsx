import blog, { ga, redirects } from "https://deno.land/x/blog/blog.tsx";
import { unocss_opts } from "./unocss.ts";

blog({
  author: "Dino",
  title: "My Blog",
  description: "The blog description.",
  avatar: "avatar.png",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:bot@deno.com" },
    { title: "GitHub", url: "https://github.com/denobot" },
    { title: "Twitter", url: "https://twitter.com/denobot" },
  ],
  lang: "zh",
  dateStyle: "long", // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  middlewares: [
    ga("UA-XXXXXXXX-X"),
    redirects({
      "/foo": "/my_post",
      // you can skip leading slashes too
      "bar": "my_post2",
    }),
  ],
  unocss: unocss_opts, // check https://github.com/unocss/unocss
  favicon: "favicon.ico",
});
