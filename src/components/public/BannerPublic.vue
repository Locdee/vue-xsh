<template>
   <div class="top_banner w_100ps">
	<!-- banner -->
	<div class="banner_top">
		<div class="hotline">
			<div class="top_location floatleft">{{locationinfo}}</div>
			<!--隐藏的地址选择-->
			<div class="top_location_layer" style="display: none">
				<div class="location_list">
					<!--<div class="location_item">-->
					<!--<a href="#">北京</a>-->
					<!--</div>-->
				</div>
			</div>

			<div class="info_center">
				<span>{{platforminformation}}</span>
			</div>



			<!--<span id="topInfo" class="topInfo floatleft font_yahei">{{attrs.TRANSLATE.PRODUCTLINE}}：</span>-->
			<!--<span id="topInfoContent" class="floatleft font_arial">0769-85534622-8056</span>-->
			<!--<span class="floatleft font_yahei onlineservice J-onlineService">-->
					<!--<span class="onlineservice_logo"></span>-->
					<!--<a href="javascript:hj5107.openChat();">{{attrs.TRANSLATE.ONLINESERVICE}}</a>-->
				<!--</span>-->
		</div>


		<div class="account_func">
			<div class="login_left floatleft mrg_l5px">
				<span class=" mrg_l5px"> <router-link  :to="{path:'\login'}" > 您好，请登录 </router-link> </span>
			</div>
			<div class="regist_left floatleft mrg_l5px">
				<span class="floatleft mrg_l5px"> <a href="/ecp/html/signup/signup.html" target="_self">免费注册</a> </span>
			</div>
			<div class="banner-separetor ">|</div>
			<div class="about_right ">
				<!--<span title="{{attrs.TRANSLATE.FAVORITE}}" class="favorite_icon"></span>-->
				<span class=""> <a href="/ecp/html/publicportal/pubbulletinDetail.html?bulletinId=1001A1100000002MMTAB" target="_blank">关于我们</a> </span>
			</div>
			<div class="banner-separetor ">|</div>
			<div class="phone_right ">
				<!--<span title="{{attrs.TRANSLATE.LOGOUT}}" class="account_icon signout"></span>-->
				<span class=""><a href="#" >手机下单</a></span>
				<div class="codePicture">
					<img src="../../assets/logo.png" />
				</div>
			</div>
		</div>
	</div>
	
	<div class="clear"></div>
</div>

</template>

<script>


export default {
        name: "BannerPublic",
        data () {
          return{
            platforminformation:"平台信息",
            locationinfo:"位置信息"
          }
        },
        components: {
        }

};
</script>
<style scoped>
h1,
h2 {
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
  color: #333;
}
.mrg_l5px {
  display: inline;
  margin-right: 10px;
}
.floatleft {
  float: left;
}

.banner_public {
  min-height: 86px;
  height: 120px;
}
.top_banner {
  position: relative;
  min-height: 30px;
  width:1200px;
  margin:0 auto;
}
.hotline {
  float: left;
  /* color: #fff; */
  font-size: 14px;
  /* font-style: italic; */
}
.top_location {
  position: relative;
  background: url(../../assets/images/header/location.png) left center no-repeat;
  padding-left: 21px;
  cursor: pointer;
  margin-left: 1px;
}

.top_location_layer {
  position: absolute;
  width: 300px;
  padding: 10px;
  top: 35px;
  left: 0;
  background-color: #fff;
  z-index: 100;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
}
.location_list {
  line-height: 24px;
  text-align: center;
}
.location_item {
  float: left;
  width: 60px;
  padding: 2px 0;
  cursor: pointer;
}
.location_item a {
  float: left;
  padding: 0 8px;
  height: 25px;
  line-height: 25px;
}
.hotline a {
  color: #000;
  text-decoration: none;
  height: 40px;
  line-height: 40px;
  display: inline-block;
}
.info_center {
  float: left;
  font-size: 14px;
  margin-left: 36px;
  background: url(../../assets/images/header/applink.png) left center no-repeat;
  padding-left: 28px;
}
.hotline span {
  line-height: 20px;
}
.account_func {
  float: right;
  font-size: 14px;
}
.account_func div {
  display: inline;
  float: left;
  height: 21px;
  line-height: 22px;
}
.account_func a {
  color: #000;
  text-decoration: none;
  height: 35px;
  line-height: 35px;
  display: inline-block;
}
.account_func .banner-separetor {
  margin-left: 20px;
  margin-right: 20px;
  height: 35px;
  line-height: 35px;
}
.account_func .phone_right {
  position: relative;
  width: 77px;
}
.account_func .codePicture {
  height: 100px;
  width: 100px;
  position: absolute;
  right: -2px;
  top: 34px;
  background: #fff;
  display: none;
}


</style>
