export default function renderFullPage(html, serializedState) {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Your SSR React Router Node App initialised with data server side!</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(serializedState).replace(/</g, "\\u003c")}
            </script>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `;
}
