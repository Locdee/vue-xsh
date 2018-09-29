<template>

    <div id="register">
        <div class="register-top-wrap">
            <registerTop class="register-top" :logindata="logindata"></registerTop>
        </div>
        <div class="register-content">
            <register-model></register-model>
        </div>
        <footer-info></footer-info>
    </div>

</template>

<script>
    import registerTop from '../../components/common/login/loginTop.vue';
    import FooterInfo from '../common/footer/FooterInfo.vue';
    import registerModel from '../../components/common/register/registerModel.vue';


export default {
    name:"register",
    data(){
        return{
            logindata:{
                logintext:"注册",
                regtext:"我已有账号，现在就",
                path:"/login",
                regbtn:"登录"
            }
        }
    },
    components: {
        registerTop,
        FooterInfo,
        registerModel
    }
}
</script>

<style lang="scss" scoped>
    #register{
        .register-top-wrap{
            width:100%;
            background: #fff;
            box-shadow: #999 0 0 180px 0;
            .register-top{
                width:1000px;
                margin:0 auto;
            }
        }
        #footInfo{
            background: none;
        }
    }
   
    .register-content{
        width:1000px;
        min-height:400px;
        margin:20px auto;
        .banner{
            margin:0;
        };
    }
</style>
