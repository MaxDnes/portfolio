# work.maxdnes — portfolio

A single-page portfolio for Maxim Dnestreanschii, built as a NeXTSTEP-style
workspace: a column browser for navigation, draggable windows, a dock.

No framework, no build step. Three files and two PDFs.

```
index.html    shell: menu, dock, empty desktop
styles.css    the chrome — bevels, scrollers, window furniture
app.js        content tree, window manager, column browser, terminal
cv/           the two CVs, served as static assets
```

## Run locally

Any static server will do:

```bash
npx serve .
# or
python -m http.server 3000
```

## Deploy

Static site, no build command. Vercel picks it up as-is.

```bash
vercel          # preview
vercel --prod   # production
```

`vercel.json` sets cache headers and a few security headers. Nothing else is needed.

## Editing the content

All copy lives in the `TREE` array at the top of `app.js`. Each node is:

```js
{ name: "AgnoSpeech", kind: "doc", body: `<h1>…</h1>` }
```

`kind` is `dir` (has `children`), `doc`, or `file`. Add a node and it appears
in the browser, the menu, and the mobile view with no other changes.

## Accessibility

Keyboard navigation through the column browser (arrows, Enter, Esc closes the
front window), visible focus, `prefers-reduced-motion` respected, and a stacked
single-column layout under 860px where the desktop metaphor stops helping.
