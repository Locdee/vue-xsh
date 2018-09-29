<template>
    <section>
        <div >
            <!-- banner -->
            <banner></banner>
            <!-- login -->
            <login-model class="indexlogin"></login-model>
           <div class="clear"></div>

        </div>
            <!-- 分类 -->
            <index-category-chart></Index-category-chart>
        
    </section>
</template>

<script>
  import banner from '../../components/common/banner/banner.vue';
  import loginModel from '../../components/common/login/loginModel.vue';
  import IndexCategoryChart from './IndexCategoryChart.vue';

export default {
    name:"IndexPublic",
    data(){
        return{

        }
    },
    components: {
        banner,
        loginModel,
        IndexCategoryChart
    }
}
</script>

<style lang="scss" scoped>
    .clear{
        clear:both;
        height: 20px;
    }
</style>
