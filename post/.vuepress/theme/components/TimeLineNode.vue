<template>
  <div class="timelinenode">
      <a class="title" :href="pageInfo.path">{{pageInfo.title}}</a>
      <!-- <a-divider /> -->
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
    margin: 50px 0 30px;


    .title {
        display: inline-block;
        padding-bottom: 10px;
        font-size: 26px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.8);
        border-bottom: 1px solid #d9d9d9;
    }

    .timestamp {
        float: right;
        display: inline-block;
        font-size: 16px;
        font-style: italic;
        color: rgba(0, 0, 0, 0.65);
        // border-top: 1px solid #d9d9d9;
        padding-top: 12px;
    }
        
}
</style>