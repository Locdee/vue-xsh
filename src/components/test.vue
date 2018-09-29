<template>
  <div class="container">
        <h1>hello, world!</h1>  
        <p>{{test}}</p>
        <p>接收的参数id: <span class="hint">{{id}}</span> </p>
        <p>接收的参数userid:<span class="hint">{{userid}}</span></p>
        <p>接收的参数name:<span class="hint">{{username}}</span></p>
      <router-link :to="{path:'/'}">返回首页</router-link>

  </div>
</template>

<script>
export default {
  name: 'testtmp',
  data () {
      return {
          test: '这是一个测试',
          id: this.$route.params.id, //接收参数
          userid: this.$route.query.userid,
          username: this.$route.query.name
      } ;
  }
}
</script>
<style>
.container{
background: #ccc;
color:greenyellow;
}
.hint{
color:darkred;
font-weight:bold;
}
</style>