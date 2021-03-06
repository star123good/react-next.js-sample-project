# react-next.js-sample-project

<h2>routes without next-routes</h2>
There is no routes.js, server.js.

    npm run dev
    next dev

    /               pages/index.js
    /products       pages/products/index.js
    /products/show  pages/products/show.js

<h2>routes using next-routes</h2>
routes.js, server.js should be built.

    npm run server
    node server.js

    /               pages/index.js
    /products       pages/products/index.js
    /products/:id   pages/products/show.js
