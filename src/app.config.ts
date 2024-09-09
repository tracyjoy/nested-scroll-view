export default defineAppConfig({
  pages: [
    'pages/demo/demo',
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  lazyCodeLoading: "requiredComponents",
  rendererOptions: { "skyline": { 
    "disableABTest": true,
    "defaultDisplayBlock": true,
    "defaultContentBox": true
  }}
})
