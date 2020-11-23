module.exports = {
  theme:"",
  title: "Joklr's Blog",
  description: "Joklr's Blog",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/slogo.jpg" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    logo: "/assets/mylogo.png",
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/OJoklrO",
    editLinks: false,
  },
  plugins: [
    require('./plugin/vuepress-plugin-cat/index.js')
  ]
};
