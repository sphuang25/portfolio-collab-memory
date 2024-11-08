import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Collaborative Memory Archiving",
  description: "6.1040 Fall 2024",
  // TODO: add your base here; this should be your repo name!
  // base: "/<REPO_NAME>/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Assignments", link: "/assignments" },
      { text: "Members", link: "/about" },
    ],

    sidebar: [
      {
        text: "Assignments",
        link: "/assignments",
      },
      {
        text: "Members",
        link: "/about",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/61040-fa24" }],
  },
});
