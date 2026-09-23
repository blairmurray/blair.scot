# blair.scot

Personal site for Blair Murray, a lead software engineer based in Scotland. It is a one-page Next.js app exported to static files and served by Nginx.

## Develop

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

`next build` writes the static site to `out/`.

## Docker

From this directory:

```bash
docker build -t blair-scot .
docker run -p 6969:80 blair-scot
```

From the `bmur-server` compose file, the `blair-scot` service publishes port 6969.

## Contact

- Website: [blair.scot](https://blair.scot)
- Email: [me@blair.scot](mailto:me@blair.scot)
- LinkedIn: [Blair Murray](https://www.linkedin.com/in/murrayblair)
- GitHub: [blairmurray](https://github.com/blairmurray)
