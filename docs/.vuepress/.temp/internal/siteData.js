export const siteData = JSON.parse("{\"base\":\"/docs/\",\"lang\":\"en-US\",\"title\":\"面试文档\",\"description\":\"面试学习\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"logo.jpg\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#1890ff\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#000000\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
