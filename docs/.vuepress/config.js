module.exports = {
  theme:"",
  title: "Joklr's Blog",
  description: "Joklr's Blog",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/slogo.jpg" }],
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./nav"),
    logo: "/assets/mylogo.png",
    lastUpdated: "最后更新",
    repo: "https://github.com/OJoklrO",
    editLinks: false,
  },
  plugins: [
    require('./plugin/vuepress-plugin-cat/index.js'),
    require('./plugin/vuepress-plugin-code-copy/index.js'),
    require('./plugin/vuepress-plugin-auto-sidebar/index.js'),]
};
