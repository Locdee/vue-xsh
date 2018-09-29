<template>
    <div id="footInfo" class="copyright font_yahei">copyright©2017东莞市补给舰供应链管理有限公司</div>
</template>

<script>
export default {
    name:"FooterInfo",
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    .font_yahei {
        font-family: Microsoft YaHei, serif;
    }
    .copyright {
        color: #666F6F;
        // float: left;
        /* padding: 20px 0 0 0; */
        text-align: center;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: #fff;
    }

</style>
