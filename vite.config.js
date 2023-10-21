import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

import aboutPage from "./src/pages/about"
import mainPage from "./src/pages/index"
import componentsPage from "./src/pages/components"

const pages = [
  {
    name: "index",
    content: mainPage()
  },
  {
    name: "about",
    content: aboutPage()
  },
  {
    name: "components",
    content: componentsPage()
  }
]

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: pages.map(({ name, content }) => ({
        filename: `${name}.html`,
        template: `${name}.html`,
        injectOptions: {
          data: {
            injectScript: content,
          },
        },
      })),
    }),
  ],
})