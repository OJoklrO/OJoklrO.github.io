<template xmlns="">
  <div>
    <main class="home" aria-labelledby="main-title">
    <time-line-node 
      v-for="item in pages"
      :key="item.key"
      :pageInfo="item" 
    />
    </main>

    <div v-if="data.footer" class="footer">
      <footer :class="{ 'footer-bottom': true }">
        {{ data.footer }}
        <br />
        <div>
          Powered by
          <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank"
            >VuePress</a
          >
          <br>
          Theme
          <a href="https://antdocs.seeyoz.cn/" rel="noopener" target="_blank"
            >Antdocs</a
          >
          | Plugin
          <a href="https://github.com/QiShaoXuan/vuepress-plugin-cat" rel="noopener" target="_blank"
            >Cat</a
          >
          <a href="https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar" rel="noopener" target="_blank"
            >Auto-Sidebar</a
          >
          <a href="https://github.com/znicholasbrown/vuepress-plugin-code-copy" rel="noopener" target="_blank"
            >Code-Copy</a
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { ensureExt } from "../util";
import TimeLineNode from './TimeLineNode.vue';

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    TimeLineNode
  },

  mounted() {
    console.log(this.$site.pages);
  },
  methods: {
    
    TimeLineNodeisExtlink(path) {
      const Reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
      return Reg.test(path);
    },
    link(url) {
      url = typeof url === "undefined" ? "" : url;
      let _url = ensureExt(url);
      _url = _url.length === 5 && _url === ".html" ? "" : _url;
      return _url;
    },
  },
  computed: {
    pages() {
      let ps = this.$site.pages;
      let items = [];
      let pattern = /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/;  // date pattern

      ps.forEach((item)=>{
        if (item.path.endsWith('.html')) {
          let temp = {
            path: item.regularPath,
            title: item.frontmatter.title,
            date: item.frontmatter.date,
            time: item.frontmatter.time,
            key: item.key,
          }
          temp.date = temp.date.toString().match(pattern)[0];
          items.push(temp);
        }
      });

      return items.sort((a, b) => {
        return String(a.date+"-"+a.time) <= String(b.date+"-"+b.time) ? 1 : -1
      });
    },
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },

    footerColumn() {
      if (this.data.footerWrap && this.data.footerWrap.length) {
        if (this.data.footerColumn !== null || this.data.footerColumn > 0) {
          if (this.data.footerColumn > 4) {
            console.error("The footer column supports a maximum of 4 columns");
            return 4;
          } else {
            let _footerColumn = this.data.footerColumn;
            _footerColumn = 24 / _footerColumn;
            return _footerColumn;
          }
        } else {
          console.error(
            "footerColumn needs to be set and cannot be 0 or empty"
          );
        }
      }
    },
  },
};

function dateCompare(d1, d2) {  // d1 < d2 = true
    let d1c = getDateSplit(d1);
    let d2c = getDateSplit(d2);

    if (d1c.y !== d2c.y) {
        return -(d1c.y - d2c.y);
    }
    if (d1c.m !== d2c.m) {
        return -(d1c.m - d2c.m);
    }
    if (d1c.d !== d2c.d) {
        return -(d1c.d - d2c.d);
    }
    if (d1c.hh !== d2c.hh) {
        return d1c.hh - d2c.hh;
    }
    if (d1c.mm !== d2c.mm) {
        return d1c.mm - d2c.mm;
    }
    if (d1c.ss !== d2c.ss) {
        return d1c.ss - d2c.ss;
    }   
    return 1;
}

function getDateSplit(d) {
    if (d.includes('-')) {
        return dateSplit(d, '-');
    } else if (d.includes('/')) {
        return dateSplit(d, '/');
    }
    return dateSplit(d, '.');
}

function dateSplit(d, c) {
    let temp;
    let s = d.split(c);
    temp = {
        y: parseInt(s[0]),
        m: parseInt(s[1]),
        d: parseInt(s[2]),
        hh: parseInt(s[3]),
        mm: parseInt(s[4]),
        ss: parseInt(s[5])
    }

    return temp;
}

</script>

<style lang="less">
@import "../styles/palette.less";

.home {
  // padding: @navbarHeight 2rem 0;
  padding: @navbarHeight;
  max-width: @homePageWidth;
  margin: 0px auto;
  display: block;
  // position: relative;
  // max-width: 960px;
  // margin: 0 auto;
  // padding: 0;
  margin-bottom: 40px;

  .hero {
    text-align: center;

    .hero-logo {
      max-width: 100%;
      max-height: 180px;
      display: block;
      margin: 5rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1,
    .description,
    .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.5rem;
      line-height: 1.3;
      color: #949494;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: @accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken(@accentColor, 10%);

      &:hover {
        background-color: lighten(@accentColor, 10%);
      }
    }
  }

  .features {
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    font-size: 1rem;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten(@textColor, 10%);
    }

    p {
      color: lighten(@textColor, 25%);
      margin-top: 0.5rem;
    }
  }

  .ant-btn-round.ant-btn-lg {
    font-size: 18px;
    height: 3rem;
    padding: 0 1.5rem;
  }
  .pre-btn {
    margin-left: 0.5rem;
  }
}

.footer {
  clear: both;
  font-size: 14px;
  line-height: 22px;
  background-color: #ffffff;
  position: relative;
  color: #8c8c8c;
  margin-bottom: 0%;
  // position: absolute;


  .footer-bottom {
    max-width: 1200px;
    text-align: center;
    padding: 16px 0;
    margin: 0 auto;
    line-height: 32px;
    overflow: hidden;
    font-size: 16px;
    font-variant: tabular-nums;

    &.footer-divider {
      border-top: 1px solid rgba(255, 255, 255, 0.25);
    }
  }
  div {
    font-size: 12px;
    line-height: 20px;
  }
  .a:link {
    color: #1890ff;
  }
  .a:visited {
    color: #13c2c2;
  }
}

@media (max-width: @MQMobile) {
  .home {
    .hero {
      .hero-logo {
        max-height: 150px;
        margin: 2rem auto 1.2rem;
      }
    }

    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 1rem;
      margin: 0.5rem auto;
      text-align: center;
    }
  }
  .footer-container {
    text-align: center;

    h2 {
      text-align: center !important;
    }
    .add-bottom {
      > div {
        &:last-child {
          > div {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

@media (max-width: @MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2.8rem;

    .hero {
      .hero-logo {
        max-height: 150px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1,
      .description,
      .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
