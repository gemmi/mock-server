import axios from 'axios'

export default {
  query: function(methodName){
    if(methodName==='get'){
      return axios.get
    }else{
      return axios[methodName]
    }
  }
}