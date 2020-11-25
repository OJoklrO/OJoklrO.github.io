<template>
  <div class="timelinenode">
      <a class="title" :href="pageInfo.regularPath">{{pageInfo.frontmatter.title}}</a>
      <br>
      <div class="timestamp">{{pageInfo.frontmatter.date}}</div>
  </div>
</template>

<script>
export default {
    props: ['pageInfo'],
}
</script>

<style lang="less">
@import "../styles/palette.less";

.timelinenode {
    // position: relative;
    margin-bottom: 30px;
    
    .title {
        display: inline-block;
        margin-bottom: 10px;
        font-size: 30px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.8);
    }

    .timestamp {
        display: inline-block;
        font-size: 20px;
        font-style: italic;
        color: rgba(0, 0, 0, 0.65);
        border-top: 1px solid #d9d9d9;
        padding-top: 12px;
    }
        
}
</style>