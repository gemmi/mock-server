<template>
  <div>
    <ul class="builder">
      
      <li><base-info></base-info></li>
      <li><headers-info></headers-info></li>
      <li><body-info></body-info></li>
      <li><params-info></params-info></li>
    </ul>
  </div>
</template>

<script>
import BaseInfo from './base.vue'
import HeadersInfo from './headers.vue'
import BodyInfo from './body.vue'
import ParamsInfo from './params.vue'
export default {
  components:{
    BaseInfo,HeadersInfo,BodyInfo,ParamsInfo
  },
}
</script>

<style>
.builder li {
list-style:none; /* 将默认的列表符号去掉 */
padding:0; /* 将默认的内边距去掉 */
margin:0; /* 将默认的外边距去掉 */
float: left
}
.builder li{
  display: inline-block;
  border: 1px solid red;
  height: 200px;
}

</style>

