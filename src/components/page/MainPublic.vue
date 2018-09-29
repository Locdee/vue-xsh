<template>
  <div class="main-public">
    <v-BannerPublic></v-BannerPublic>
    <div class="main-menu-wrap">
      <div class="main-menu-top">
        <!-- logo点击区域 -->
        <div class="J-logo main-menu-logo"></div>
        <div class="main-menu-search">
            <v-searchpublic></v-searchpublic>
        </div>
      </div>
      <div class="main-menu">
        <div id="category">
          <CategorysList></CategorysList>
        </div>
        <div id="navigator">
          <MenuPublic />
        </div>    
      </div>
    </div>
    <div class="main-content">
      <router-view  v-wechat-title="$route.meta.title"/>
    </div>
    <!-- <div class="main-footer"> -->
      <!-- 页脚信息 -->
      <FooterMessage></FooterMessage>
    <!-- </div>
    <div class="main-footlink"> -->
      <!-- 页脚链接 -->
      <footerLink></footerLink>
    <!-- </div>
    <div class="main-footinfo"> -->
      <!-- 页脚链接 -->
      <footerInfo></footerInfo>
    <!-- </div> -->
  </div>
</template>

<script>
  import BannerPublic from '../public/BannerPublic.vue';
  import CategorysList from '../common/categorysList/CategorysList.vue';
  import MenuPublic from '../public/MenuPublic.vue';
  import SearchPublic from '../public/SearchPublic.vue';
  import FooterMessage from '../common/footer/FooterMessage.vue';
  import FooterInfo from '../common/footer/FooterInfo.vue';
  import FooterLink from '../common/footer/FooterLink.vue';


export default {
    name: 'MainPublic',
    components: {
        'v-BannerPublic':BannerPublic,
        CategorysList,
        MenuPublic,
        'v-searchpublic':SearchPublic,
        FooterMessage,
        FooterInfo,
        FooterLink
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods:{
  toNewpage:function(){
// alert('ccc');
  this.$router.push({path:'/helloworld',query:{userid:128,name:'达文西'}});
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#category{
    width: 190px;
    z-index: 11;
    position: absolute;
}
.main-menu-wrap{
   /* height:40px; */
  width:100%;
  background: #fff;
}

.main-menu-top,.main-menu{
  height:40px;
  width:1200px;
  margin:0 auto;
}
.main-content{
  width:1200px;
  margin:0 auto;
  margin-top:10px;
}
.main-menu-top{
  height:82px;
}
.main-menu-logo {
  background: url(../../assets/images/header/logo.jpg) no-repeat 60px;
  width: 300px;
  height: 70px;
  position: absolute;
  float: left;
  top: 42px;
  left: 62px;
  cursor: pointer;
  background-size: 118px !important;
}
.main-menu-search {
  float: right;
  width: 77%;
}
.main-footer,.main-footerlink,.main-footerinfo{
  width: 100%;
  background: #fff;
}
</style>
