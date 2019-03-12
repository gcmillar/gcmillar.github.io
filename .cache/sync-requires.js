const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/404.js"))),
  "component---src-pages-crowd-scores-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/CrowdScores.js"))),
  "component---src-pages-gradient-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Gradient.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/index.js"))),
  "component---src-pages-numilli-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Numilli.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/page-2.js"))),
  "component---src-pages-quidco-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Quidco.js"))),
  "component---src-pages-suggestv-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Suggestv.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Thanks.js"))),
  "component---src-pages-vivy-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Vivy.js"))),
  "component---src-pages-yunojuno-js": hot(preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Yunojuno.js")))
}

