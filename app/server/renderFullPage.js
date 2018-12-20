export default function renderFullPage(html, styles, serializedState) {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Your SSR React Router Node App initialised with data server side!</title>
            ${styles}
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
