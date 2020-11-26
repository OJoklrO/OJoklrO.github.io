export default (options, ctx) => ({
    name: "vuepress-plugin-sidebar-and-navbar",
    
    async ready() { 
      const { pages } = ctx;
    },
    
    async enhanceAppFiles() {
        return {
          name: "sidebar-and-navbar-enhance",
        //   content: `export default ({ siteData, options }) => { siteData.themeConfig.sidebar = ${JSON.stringify(SIDEBAR)} }`
        }
    }
});