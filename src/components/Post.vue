<template>
  <div class="post">
    <form>
      <div class="main">
        <select name="method" v-model="data.method">
          <option value="1">POST</option>
          <option value="0">GET</option>
        </select>
        <input type="text" name="url" id="url" placeholder="http://" v-model="data.url">
        <button type="button" class="button" @click="submit">提交</button>
      </div>
      <ul class="params clear_fix">
        <template v-for="num in nums">
          <li><input type="text" placeholder="参数名" v-model="data['key' + num]"></li>
          <li><input type="text" placeholder="参数值" v-model="data['val' + num]"></li>
        </template>
      </ul>
      <div class="add_params" v-if="data.method != '0'">
        <button type="button" class="button" @click="addInput">添加参数</button>
      </div>
    </form>
    <div class="res" v-show="resData">{{ resData }}</div>
  </div>
</template>

<script>
export default {
  name: 'post',
  data: function() {
    return {
      nums: 0,
      data: {
        url: '',
        method: '0'
      },
      resData: ''
    }
  },
  methods: {
    addInput: function(){
      this.nums += 1;
    },
    submit: function(){
      var self = this;
      self.resData = '';
      // console.log(this.data);
      if (this.data.url == ''){
        alert('域名不能为空');
        return false;
      }
      this.$http.post('curl.php',this.data).then(function(data){
        self.resData = data.data;
      });
    }
  }
}
</script>

<style lang="less">
  .post{
    box-sizing: border-box;
    width: 1200px;
    margin: 0 auto;
    .clear_fix:after{
      content: '';
      display: block;
      clear: both;
    }
    .button{
      transition : background-color 0.3s;
      outline: none;
      border: none;
      padding: 6px 20px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      cursor: pointer;
      background-color: #5cb85c;
      font-size: 16px;
      color: #fff;
      &:hover{
        background-color: #4cae4c;
      }
    }
    input,select{
      outline: none;
    }
    .main{
      margin-top: 20px;
      text-align: center;
      select,input{
        padding: 6px 10px;
        font-size: 14px;
      }
      input{
        width: 400px;
      }
    }
    .params{
      li{
        margin-top: 20px;
        float: left;
        width: 48%;
        &:nth-child(2n){
          float: right;
        }
        input{
          box-sizing: border-box;
          width: 100%;
          padding: 6px 10px;
        }
      }
    }
    .add_params{
      text-align: center;
      margin-top: 10px;
    }
    .res{
      width: 800px;
      margin: 60px auto 0;
      padding: 20px;
      border: 1px solid #acacac;
    }
  }
</style>
