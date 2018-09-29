<template>
   <section>
            <router-link v-for="(title,index) in titles" :key=index :to="{path:title.path}">{{title.title}}</router-link>
   </section>
    
</template>
<script>
    export default {
        name:'MenuPublic',
        data(){
            return{
                titles:[
                    {
                        path:'/',
                        title:'首页'
                    },
                    {
                        path:'/publicproductlist',
                        title:'商品中心'
                    },
                    {
                        path:'/publicannoucement',
                        title:'企业公告'
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
a{
    text-decoration:none;
}
 section{
	margin:0;
	padding:0;
	margin-left:220px;
}
section a{
	font-size: 14px;
	float: left;
	width: 90px;
    margin-left:10px;
	list-style: none;
	color: #000;
	line-height: 40px;
	text-align: center;
	cursor: pointer;
}

a:hover , a.router-link-exact-active{
    color:#0082bc;
    font-weight: bold;
    border-bottom: 3px solid #0082bc;
}


</style>

