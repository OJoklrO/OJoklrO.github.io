module.exports = (options = {}, ctx) => ({
    extendPagesData() {
        console.log(ctx.$pages);
        $site.pages = ctx.$pages;
    }
})