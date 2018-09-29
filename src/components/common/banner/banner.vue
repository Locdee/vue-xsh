
<template>
    <div class="banner">
        <router-link class="img" v-for="(banner,index) in banners" :key=index :to="{path:banner.path}">
            <img :src="banner.src" alt="">
        </router-link>
    </div>
</template>
<script>
export default {
    name:'banner',
    data(){
        return{
            banners:[
                {
                    src:require('../../../assets/images/banner/1.jpg'),
                    path:'/'
                },
                {
                    src:require('../../../assets/images/banner/1.jpg'),
                    path:'/'
                },
                {
                    src:require('../../../assets/images/banner/1.jpg'),
                    path:'/'
                },
                {
                    src:require('../../../assets/images/banner/1.jpg'),
                    path:'/'
                }
            ]
                
        }
    }
}
</script>

<style lang="scss" scoped>
    .banner{
        width:700px;
        height:400px;
        overflow: hidden;
        float: left;
        margin-left: 200px;
        a{
            width: 100%;
            img{
                width:100%;
                height:400px;
            }

        }
    }
</style>
