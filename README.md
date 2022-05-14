# Layout Components in Next.js

Inspired by [this article](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/)

## Learnings

- **Next.js behaves differently than a typical SSR application**. The main difference is that **on the first-page request, the server sends HTML** (suitable for SSO), then **the framework handles any subsequent navigation on the client**.

  - It took me a while to understand this as **I thought that every time I perform a page transition, the server responds with HTML**.

  - **This would explain** how **React can perform reconciliation** and **not unmount some components when page changes**. Since routing happens on the client, there is a tree in memory to reconcile against.

  - This fact also makes the _"Layout Components"_ work. **Preserving state on components that do not change during page transitions** would not be possible without having something to reconcile to.

- The _"Layout Components"_ are great. Especially the pattern with a function that takes a _"page"_ prop.

  - Consult [this documentation page](https://nextjs.org/docs/basic-features/layouts) for more information.
