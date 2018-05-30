<template>
<div>
  <div>title: 包括 mocker配置,透传统计</div>
  <ul class="mocker">
      <li><trans-info></trans-info></li>
      <li><trans-statistic></trans-statistic></li>
  </ul>
</div>
</template>

<script>
import TransInfo from './transInfo.vue'
import TransStatistic from './transStat.vue'
export default {
  components:{
    TransInfo,TransStatistic
  },
  created(){
    console.log(111)
  }
}
</script>

<style>
.mocker li {
list-style:none; /* 将默认的列表符号去掉 */
padding:0; /* 将默认的内边距去掉 */
margin:0; /* 将默认的外边距去掉 */
float: left
}
.mocker li{
  display: inline-block;
  border: 1px solid red;
  height: 200px;
  margin: 10px;
}
</style>
