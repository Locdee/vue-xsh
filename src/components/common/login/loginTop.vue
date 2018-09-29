<template>
    <div class="logintop-container">
        <div class="logintop-left">
            <router-link  :to="{path:'/'}" > <div class="logo"> </div> </router-link>
            <div class="login-text">{{logindata.logintext}}</div>
        </div>
        <div class="logintop-right">
            <span class="reg-text">{{logindata.regtext}}</span>
            <router-link :to="{path:logindata.path}" class="reg-btn">{{logindata.regbtn}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"loginTop",
    data(){
        return{

        }
    },
    props:[
        "logindata"
    ]

}
</script>

<style lang="scss" scoped>
.logintop-container{
    height: 100px;
}
    .logintop-left {
        float: left;
        height: 100px;
        .logo{
            background: url(../../../assets/images/header/logo.jpg) no-repeat scroll 0 0 transparent;
            float: left;
            height: 100px;
            width: 180px;
            background-size: 160px;
            cursor: pointer;
        };
        .login-text {
            margin-left: 210px;
            padding-left: 50px;
            height: 100px;
            line-height: 100px;
            font-size: 24px;
            background: url(../../../assets/images/login/login_text_left.png)left center no-repeat;
        };
    }
    .logintop-right {
        float: right;
        height: 100px;
        line-height: 100px;
        .reg-text {
            font-size: 18px;
            color: #5E5E5E;
            margin-right: 42px;
        };
        .reg-btn {
            text-decoration: none;
            font-size: 18px;
            color: #333333;
            padding: 5px 15px;
            margin-right: 20px;
            border-radius: 5px;
            cursor: pointer;
            background: #fabd00;
            width: 86px;
            height: 44px;
        };
    }
</style>
