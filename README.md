# `@next/mdx` with Dynamic Import

- dynamic import: `` await import(`../../content/${slug}.mdx`) ``
  - import MDX content from outside of the `app/` directory
  - import metadata eg. `title` from MDX exports
  - use [Next.js dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- use in [async components](https://react.dev/reference/rsc/server-components#async-components-with-server-components) (React Server Components in Next.js App Router)
- [better than `next-mdx-remote` or `mdx-bundler`](https://github.com/vercel/next.js/discussions/70417)
- TypeScript checks in MDX files with [MDX Analyzer](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

CodeSandbox: https://codesandbox.io/p/devbox/github/karlhorky/next-mdx-dynamic-import-demo

https://github.com/user-attachments/assets/3981b2d7-7a42-48ca-be77-47d816d9e12e

![2024-10-15_18-10](https://github.com/user-attachments/assets/f7ad6b35-90f4-4f77-bd6f-85b9d6be2e05)
