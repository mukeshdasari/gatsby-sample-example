// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/home/mukesh/WorkingDir/Gatsby_Dev/gatsby-sample-example/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/home/mukesh/WorkingDir/Gatsby_Dev/gatsby-sample-example/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("/home/mukesh/WorkingDir/Gatsby_Dev/gatsby-sample-example/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/home/mukesh/WorkingDir/Gatsby_Dev/gatsby-sample-example/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-my-files-js": () => import("/home/mukesh/WorkingDir/Gatsby_Dev/gatsby-sample-example/src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/mukesh/WorkingDir/Gatsby_Dev/gatsby-sample-example/.cache/data.json")

