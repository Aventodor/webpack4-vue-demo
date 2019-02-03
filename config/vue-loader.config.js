module.exports = function (isDev) {
  return {
    preserveWhiteSpace: true,
    extractCss: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    },
    hotReload: isDev //根据环境变量生成
  }
}
