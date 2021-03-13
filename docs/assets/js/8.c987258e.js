(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{745:function(t,s,a){"use strict";a.r(s);var n=a(49),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"github-pages和action全自动部署博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages和action全自动部署博客"}},[t._v("#")]),t._v(" github pages和action全自动部署博客")]),t._v(" "),a("p",[t._v("记录一下本博客的搭建过程")]),t._v(" "),a("h3",{attrs:{id:"_1-框架选择与主题配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-框架选择与主题配置"}},[t._v("#")]),t._v(" 1. 框架选择与主题配置")]),t._v(" "),a("p",[t._v("因为前端方面的东西本人只简单使用过Vue，但同时这个菜鸡又想DIY，所以最后就选择了"),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("确定框架后就开始找主题，因为最开始是奔着DIY去的，直接就用了"),a("a",{attrs:{href:"https://antdocs.seeyoz.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant Doc"),a("OutboundLink")],1),t._v("的主题容纳后开始裁剪，顺标方便引用Antd的东西。")]),t._v(" "),a("p",[t._v("经过各种的删减，最后的主题就变成了现在的样子，暂时可以使用了，但是代码乱成一团需要逐步精简。。")]),t._v(" "),a("h3",{attrs:{id:"_2-github-pages自动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-github-pages自动部署"}},[t._v("#")]),t._v(" 2. Github Pages自动部署")]),t._v(" "),a("p",[t._v("为了方便部署，所以本人决定直接扔在Github Pages上。")]),t._v(" "),a("p",[t._v("简单流程就是创建名为"),a("em",[t._v("USERNAME")]),t._v(".github.io的仓库，然后将构建好的博客静态页面放在这个仓库里，然后进行配置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/home/joklr/blog/post/pictures/PagesAndAction/1.png",alt:""}})]),t._v(" "),a("p",[t._v("在Source处选择要部署的静态页面文件所在分支，目录。这里的目录似乎只有"),a("code",[t._v("/(root)")]),t._v("根目录和"),a("code",[t._v("/docs")]),t._v("两个选择。"),a("a",{attrs:{href:"https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("里说可以自己选择文件夹但是附的图片里也只有这两个目录。")]),t._v(" "),a("p",[t._v("之后是域名问题，我希望把我自己的域名解析到博客，Github Pages免费提供了ssl证书来保证https访问，如果要使用只需要将自己要解析的域名填在Custom domain中即可，但是跟快就发现一个问题每次更新仓库时Custom domain中的内容就会消失。。查阅"),a("a",{attrs:{href:"https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("后发现只需要将域名写在CNMAE文件中即可，CNAME文件的位置要在Source中选则的目录下。")]),t._v(" "),a("p",[t._v("配置完成后每次添加文章后只要将构建好的静态页面发布到github仓库中即可。")]),t._v(" "),a("p",[t._v("为此我写了一个自动发布脚本：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# !/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./post/.vuepress/dist/\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blog.joklr.org"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CNAME\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto commit'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:OJoklrO/OJoklrO.github.io.git\n")])])]),a("p",[t._v("至此，自动发布也已经完成。")]),t._v(" "),a("h3",{attrs:{id:"_3-github-action自动构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-github-action自动构建"}},[t._v("#")]),t._v(" 3. Github Action自动构建")]),t._v(" "),a("p",[t._v("自动部署完成后基本已经实现自动化还是很爽的，但是跟快发现隔壁用hugo搭博客的已经构建好部署结束了我这里还没构建完，同时每次发布构建几分钟确实吃不消（也有可能垃圾代码占了一大部分）。于是本人将目光投向了"),a("a",{attrs:{href:"https://docs.github.com/en/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Action"),a("OutboundLink")],1),t._v("准备将构建也放在云端。github action入门教程可以参考"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰大大的博客"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("大概思路是每次我添加文章向仓库提交后，github action会自动运行构建命令，构建结束后将内容重新提交到github仓库。")]),t._v(" "),a("p",[t._v("最初的方案是博客源码在一个独立的仓库，github action构建后提交到单独的静态页面仓库。但是由于github action本质是在一个云端虚拟机上执行命令，所以ssh密钥之类的东西一概没有，能访问github仓库的唯一方法就是github提供的"),a("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("Access Token"),a("OutboundLink")],1),t._v("，同时push操作也要由封装好的"),a("a",{attrs:{href:"https://github.com/marketplace/actions/github-push",target:"_blank",rel:"noopener noreferrer"}},[t._v("ad-m/github-push-action"),a("OutboundLink")],1),t._v("操作来执行（有技术自己写也可）。经过一番折腾后成功报错："),a("a",{attrs:{href:"https://github.com/ad-m/github-push-action/issues/55",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues #55"),a("OutboundLink")],1),t._v("无论是issue下给出的解决方法还是从其他地方找到的解决方法都没有解决，最终向github action屈服，将源码和构建后的静态页面塞在一个仓库里。")]),t._v(" "),a("p",[t._v("最后github action的yml文件是这样的：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Update Blog\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# master分支push时触发")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflow_dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout with Git LFS\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2   \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取源码仓库")]),t._v("\n      \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dep\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置node.js环境")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15.x\n        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("global yarn\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cd ../../\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn install\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" set "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("e\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn build\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf ./docs\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mv post/.vuepress/dist ./docs\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' echo "blog.Joklr.org" '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" ./docs/CNAME\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('local user.email "github'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('@users.noreply.github.com"\n    '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('local user.name "github'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('"\n\n    '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git add .\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git commit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('m "Add changes"\n    '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Push changes\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("m/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@master\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 向原仓库提交改动")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注入github access token")]),t._v("\n")])])]),a("p",[t._v("实现效果就是写完文章向gtihub仓库提交改动即可自动构建发布。")]),t._v(" "),a("p",[t._v("最后是本博客的"),a("a",{attrs:{href:"https://github.com/OJoklrO/OJoklrO.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);