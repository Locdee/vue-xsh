<template>

    <div id="login">
        <div class="login-top-wrap">
            <loginTop class="login-top" :logindata="logindata"></loginTop>
        </div>
        <div class="login-content">
            <banner></banner>
            <login-model class="indexlogin"></login-model>
        </div>
        <footer-info></footer-info>
    </div>

</template>

<script>
    import banner from '../../components/common/banner/banner.vue';
    import loginModel from '../../components/common/login/loginModel.vue';
    import loginTop from '../../components/common/login/loginTop.vue';
    import FooterInfo from '../common/footer/FooterInfo.vue';


export default {
    name:"login",
    data(){
        return{
            logindata:{
                logintext:"登录",
                regtext:"还没有账号？",
                path:"/register",
                regbtn:"注册"
            }
        }
    },
    components: {
        banner,
        loginModel,
        loginTop,
        FooterInfo
    }
}
</script>

<style lang="scss" scoped>
    #login{
        .login-top-wrap{
            width:100%;
            background: #fff;
            box-shadow: #999 0 0 180px 0;
            .login-top{
                width:1000px;
                margin:0 auto;
            }
        }
        #footInfo{
            background: none;
        }
    }
   
    .login-content{
        width:1000px;
        height:400px;
        margin:20px auto;
        .banner{
            margin:0;
        };
    }
</style>
