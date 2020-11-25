<template>
  <div class="timelinenode">
      <a class="title" :href="pageInfo.path">{{pageInfo.title}}</a>
      <br>
      <!-- <div class="timestamp">{{pageInfo.frontmatter.date.toString().match( /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/)[0]}}</div> -->
      <div class="timestamp">{{pageInfo.date}}</div>
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
    margin: 30px 0 30px;
    
    .title {
        display: inline-block;
        margin-bottom: 10px;
        font-size: 24px;
        line-height: 32px;
        // font-weight: bold;
        color: rgba(0, 0, 0, 0.8);
    }

    .timestamp {
        display: inline-block;
        font-size: 16px;
        font-style: italic;
        color: rgba(0, 0, 0, 0.65);
        border-top: 1px solid #d9d9d9;
        padding-top: 12px;
    }
        
}
</style>