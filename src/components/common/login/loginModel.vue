<template>
<div id="loginform">
<!-- 登录form -->
<div class="login_form_title">
	<div class="login-title">{{attrs.TRANSLATE.LOGIN}}</div>
	<!-- 登录错误信息区域 -->
	<div class="login_error_notice hidden">
		<span class="icon icon-error hidden"></span>
		<span id="loginError" class="hidden"></span>
	</div>
</div>
<div class="login_form">
	<!-- 用户名 -->
	<label class="login_input" style="margin-top: 10px;">
		<input type="text" id="username" class="username" :placeholder="attrs.TRANSLATE.INPUTUSERNAME" />
		<span class="icon icon-head1 login-user"></span>
	</label>
	<!-- 密码-->
	<label class="login_input">
		<input type="password" id="password" class="password" :placeholder="attrs.TRANSLATE.INPUTPASSWORD" />
		<input type="password" id="password2" style="display: none;" />
		<span class="icon icon-lock1 login-password"></span>
	</label>
	<!-- 校验码 -->
	<!--<label class="login_validate">-->
		<!--<input type="text" maxlength="4" id="validate" class="validate" placeholder="{{attrs.TRANSLATE.INPUTVALIDATIIONCODE}}" /> -->
		<!--<a href="#" class="validate-code"> -->
			<!--<img src="" id="codefont" width="68" height="27" alt="" /> -->
		<!--</a> -->
	<!--</label>-->
    <!-- 选择语种 -->
    <!--<div class="login_language">-->
        <!--<select id="Language" class="login_select_lang">-->
        <!--</select>-->
    <!--</div>-->
	<!-- cookie设置和密码找回 -->
	<div class="out">
		<input type="checkbox" id="rememberpwd" class="floatleft" />
		<label for="rememberpwd" class="login_remember_pwd">{{attrs.TRANSLATE.REMEMBERPASSWORD}}</label>

		<!--<a href="/ecp/html/signup/signup.html" class="signup">{{attrs.TRANSLATE.REGISTER}}</a>-->
		<a href="/ecp/html/signup/retrievePassword.html" class="login_retrieve_pwd">{{attrs.TRANSLATE.FORGOTPASSWORD}}?</a>
		<input type="checkbox" id="login_type"  class="hidden" />
	</div>
	<!-- 登录按钮 -->
	<div class="login_button_wrapper">
		<a href="#" class="login_button font_yahei">立即{{attrs.TRANSLATE.LOGIN}}</a>
		<span class="login_btn_animated" style="display: none;">{{attrs.TRANSLATE.LOGINING}}</span>
		<span class="btn_inverse"></span>
	</div>
	<!-- 注册-->
	<div class="signup_button_wrapper">
		<a href="/ecp/html/signup/signup.html" class="signup">免费注册&nbsp;有惊喜&gt;</a>
	</div>
	<div class="signup_button_wrapper signup-more-info">
		更多信息，请致电0769-85534622-8069
	</div>
	<div style="clear: both;"></div>
</div>

</div>
</template>
<script>
export default {
	name:"loginModel",
	data(){
		return{
			attrs:{
				TRANSLATE:{
					LOGIN:'登录',
					INPUTUSERNAME:'请输出用户名',
					INPUTPASSWORD:'请输入密码',
					REMEMBERPASSWORD:'记住密码',
					FORGOTPASSWORD:'忘记密码',
					LOGINING:'登录中……'
				}
			}
		}
	}
	
}
</script>
<style lang="scss" scoped>
.hidden{
	display: none;
}
#loginform{
	float:right;
	width:284px;
	background: #fff;
}
.login_error_notice span {
  line-height: 16px;
}
.login_form {
	padding: 14px 40px 5px 40px;
}
.login_error_notice {
	float: right;
	border: solid 1px #FACCD0;
	background-color: #FFF6F7;
	color: #E60012;
	padding: 2px 5px 2px 5px;
	margin: 10px;
	width: 224px;
	height: 23px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.login_error_notice span {
  line-height: 23px;
}
.login_error_notice .icon{
	position:relative;
	top:3px;
}
label.login_input, label.login_validate {
	display: inline;
	float: left;
	height: 31px;
	margin-bottom: 10px;
	padding: 0;
	width: 100%;
}
.login_input input {
  float: left;
  width: 200px;
}
.login_input input, .login_validate input {
	border: solid 1px #DDD;
	color: #727171;
	display: inline;
	height: 28px;
	line-height: 28px;
	font-size: 14px;
	margin: 0;
	text-indent: 30px;
	width: 100%;
}
label.login_validate {
  position: relative;
}
label.login_input, label.login_validate {
  line-height: 31px;
  position: relative;
}
.login_validate img {
  border: 0 none;
  display: inline;
  float: right;
  margin: 0;
}
 
.floatleft {
  float: left;
}
label.login_remember_pwd {
  color: #848484;
  float: left;
  height: 20px;
  line-height: 20px;
  /* width: 102px; */
}
.login_retrieve_pwd{
	float: right;
	color: #0082bc;
	text-decoration: none;
}
a.login_forget_pwd {
  color: #29A3F0;
  float: right;
  height: 20px;
  line-height: 20px;
  width: 96px;
}

a.signup {
  color: #29A3F0;
  float: right;
  height: 20px;
  line-height: 20px;
}

.login_button_wrapper {
  	float: left;
  	height: 45px;
	margin-top: 10px;
	width: 100%;
}
.signup_button_wrapper {
	float: left;
	height: 30px;
	/*margin-top: 20px;*/
	width: 100%;
}
.signup_button_wrapper a{
	font-size: 16px;
	height: 36px;
	line-height: 36px;
	text-align: center;
	text-decoration: none;
	width: 100%;
	color: #333;
}

.font_yahei {
  font-family: Microsoft YaHei,serif;
}
.login_validate input {
  float: left;
  text-indent: 5px;
}

/* language */
.login_language {
  color: #7F7F7F;
  line-height: 20px;
}

.login_language .login_select_lang {
	display: inline;
	float: left;
	height: 30px !important;
	line-height: 30px !important;
	margin-bottom: 10px;
	font-size: 14px;
	width: 300px;
	padding-left: 10px;
	border: solid 1px #DDD;
}
.login_form_title{
	padding-left: 40px;
	border-bottom: 1px solid #d9d9d9;
}
.login-title{
	height: 50px;
	line-height: 50px;
	display: inline-block;
	font-size: 18px;
	font-family: Microsoft Yahei;
	font-weight: bold;
	color: #727171;
	/*margin-bottom: 20px;*/
}
/*验证码*/
.validate-code{
position: absolute;
right: 0;
top: 3px;
}
.login-user{
	position:absolute;
	top: 8px;
	left: 10px;
}
.login-password{	
	position:absolute;
	top: 8px;
	left: 10px;
}
.focus .icon-user{
	// background:url("../img/icon_person_blue.png");
}
.focus .icon-password{
	// background:url("../img/icon_lock_blue.png");
}
.signup-more-info{
	font-size: 14px !important;
	margin:0 -25px;
	line-height: 30px;
	text-align: center;
	width: 282px;
}
.login_top_wrapper .signup-more-info{
	display:none;
}
/*登录及注册面板*/
.indexlogin{
	height: 400px;
	width: 284px;
	background-color: #fff;
	text-align: center;
	color:#FFF;
}
.indexlogin a{
	text-decoration:none !important;
	display: inline-block;
}
.indexlogin .signup_button_wrapper{
	color: #333333 !important;
	font-size: 12px;
}
.indexlogin .signup_button_wrapper a{
	color: #333333 !important;
	font-size: 12px;
}
.indexlogin .login_retrieve_pwd{
	color: #0082bc !important;
}
.indexlogin .login_form_title{
	height: 70px;
	color: #333333;
	line-height: 70px;
	border-bottom: 1px solid #d9d9d9;
	margin: 0;
	text-align: left;
	font-size: 20px;
	padding-left: 28px;
	margin-top: 15px;
	margin-bottom: 25px;
}

/*.login_error_notice hidden{*/
	/*display: none;*/

/*}*/
.indexlogin .login_error_notice{
	position: absolute !important;
	right: 0 !important;
	top: 28px !important;
	width: 190px !important;
}
.indexlogin #loginError{
	position: absolute !important;
	font-size: 14px !important;
}
.indexlogin .icon-error{
	top: -23px !important;
    left: -3px !important;
}
.indexlogin h3 span{
	font-size: 20px;
}
.indexlogin .login_button_wrapper{
	margin-top: 33px;
	background: #0082bc;
	height: 50px;
	line-height: 50px;
	width: 230px;
	font-size: 14px;
}
.indexlogin a.login_button, .indexlogin .login_btn_animated{
	height: 50px;
	line-height: 50px;
	width: 230px;
	font-size: 14px;
}
.useName{
	height: 40px;
	width: 193px;
	border: 1px solid #cfcfcf;
	color: #333333;
	margin: 0 auto;
	margin-top: 25px;
	padding-left: 36px;
	// background: url(../img/login.png) no-repeat 0 1px;
}
.useNum{
	height: 40px;
	width: 193px;
	border: 1px solid #cfcfcf;
	color: #333333;
	margin: 0 auto;
	margin-top: 15px;
	padding-left: 36px;
	// background: url(../img/login.png) no-repeat 0 -44px;
}
.indexlogin .login_form{
	padding:0;
	height: 40px;
	width: 232px;
	margin: 0 auto;
}
.indexlogin .login_form .login_input input,.indexlogin .login_form .login_validate input{
	height: 40px;
    line-height: 40px;
    background-color: none!important;
}
.indexlogin label.login_input,.indexlogin label.login_validate{
	height: 40px;
}
.indexlogin .login-user{
	top: 13px;
}
.indexlogin .icon{
	top: 13px;
}
.indexlogin .out{
	margin-bottom: 20px;
}
.rememOut{
	width: 229px;
	height: 20px;
	margin: 0 auto;
	color: #7b7b7b;
	font-size: 12px;
	margin-top: 15px;
}
.rememOut label{
	float: left;
	margin-left: 7px;
}
.rememOut .forgetNum{
	color: #0082bc;
	float: right;

}
.indexlogin .link{
	width: 100px;
	height: 39px;
	border: none;
	color: #FFF;
	margin: 10px 8px;
	cursor: pointer;
	display: inline-block;
	line-height: 39px;
	font-weight:bolder;
}
.indexlogin .link-login{
	color:#5b4f29;
	background-color: #0082bc;
	height: 49px;
	width: 231px;
	text-align: center;
	padding: 0;
	display: block;
	margin: 0 auto;
	margin-top: 15px;
	line-height: 49px;
	font-size: 14px;


}
.indexlogin .link-register{
	font-size: 12px;
	margin-top: 0;
	color: #333333;
}
</style>
