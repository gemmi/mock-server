<template>
  <div class="trans-info">
    <div>title: transparent transmit</div>
    <div class="field">
      <span>from:</span>
      <input v-model="api.reqInfo.url" />
    </div>
    <div class="field">
      <span>headers:</span>
      <input v-model="api.reqInfo.headers" />
    </div>
    <div class="field">
      <span>to:</span>
      <input v-model="api.mocker.destUrl" />
    </div>
    <button @click="forwardReq">test</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props:{
    api: {type: Object,required: true,default: {
      reqInfo:{
        url: 'http://localhost:3000/test'
      }
    }},
    destUrl: {type: String,requires: true,default: ''},
  },
  data(){
    return {
      _srcUrl: '',
      _destUrl: ''
    }
  },
  watch:{
    api:{
      deep: true,
      handler(val){
        this._srcUrl = val.reqInfo.url
      }
    }
  },
  methods:{
    forwardReq(){
      
    },
  }
}
</script>
<style>
.trans-info{
  text-align: left;
}

</style>


