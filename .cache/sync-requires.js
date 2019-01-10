// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/404.js")),
  "component---src-pages-crowd-scores-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/CrowdScores.js")),
  "component---src-pages-gradient-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Gradient.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/index.js")),
  "component---src-pages-numilli-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Numilli.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/page-2.js")),
  "component---src-pages-quidco-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Quidco.js")),
  "component---src-pages-suggestv-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Suggestv.js")),
  "component---src-pages-thanks-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Thanks.js")),
  "component---src-pages-vivy-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Vivy.js")),
  "component---src-pages-yunojuno-js": preferDefault(require("/Users/garrettmillar/gcmillar.github.io/src/pages/Yunojuno.js"))
}

exports.json = {
  "layout-index.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/404.json"),
  "crowd-scores.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/crowd-scores.json"),
  "gradient.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/gradient.json"),
  "index.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/index.json"),
  "numilli.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/numilli.json"),
  "page-2.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/page-2.json"),
  "quidco.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/quidco.json"),
  "suggestv.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/suggestv.json"),
  "thanks.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/thanks.json"),
  "vivy.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/vivy.json"),
  "yunojuno.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/yunojuno.json"),
  "404-html.json": require("/Users/garrettmillar/gcmillar.github.io/.cache/json/404-html.json")
}