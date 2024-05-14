# Reverse Proxy for Dynamic Services

This repository defines a [Vercel deployment](https://by-rangho-dev.vercel.app) that act as a sort of public reverse proxy.

All projects of mine that requires a dynamic server should be accessbile from a directory under the domain `by.rangho.dev`.
[Vercel Rewrites](https://vercel.com/docs/edge-network/rewrites) and [Redirects](https://vercel.com/docs/edge-network/redirects) are used for this purpose.
A `GET` request to the root directory (`https://by.rangho.dev/`) redirects to the main GitHub Pages hosted page (`https://rangho.dev/`).

## List of rewrites

| Target                                                            | Repository                                               | Description                                    |
|-------------------------------------------------------------------|----------------------------------------------------------|------------------------------------------------|
| [`/vercel-hello-world`](https://by.rangho.dev/vercel-hello-world) | [![badge]](https://github.com/RangHo/vercel-hello-world) | Vercel version of "Hello, world!" application. |



[badge]: https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white "GitHub"
