import blog, { ga, redirects } from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "作者狗子",
  title: "我的博客",
  description: "这里是博客首页的描述",
  avatar: "https://deno-avatar.deno.dev/avatar/83a531.svg",
  avatarClass: "rounded-full",
  lang: "zh",
  middlewares: [
    redirects({
      "/posts": "/posts",
      "/posts2": "/posts2",
    }),
  ],
  favicon: "favicon.ico",
});
