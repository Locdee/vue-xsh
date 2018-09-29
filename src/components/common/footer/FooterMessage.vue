<template>
    <div class="footer_message_wrap">
        <div class="footer_message_content" >
            <div class="footer_message" v-for="(message,index) in messages" :key="index">
                <a :href="message.url" target="_blank">
                    <img :src="message.src">
                </a>
                <div class="footer_message_r">
                    <p class="p1">{{message.title}}</p>
                    <p class="p2">
                        <a href="#" target="_blank">{{message.message}}</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"FooterMessage",
    data(){
        return{
            messages:[
                {
                    title:"食品安全",
                    message:"天然无污染食品",
                    url:"#",
                    src:require("../../../assets/images/footer/spaq.png")
                },
                {
                    title:"全球精选",
                    message:"一站式食材购物网站",
                    url:"#",
                    src:require("../../../assets/images/footer/spaq.png")
                },
                {
                    title:"冷链配送",
                    message:"三温配送保证品质",
                    url:"#",
                    src:require("../../../assets/images/footer/spaq.png")
                },
                {
                    title:"源头直采",
                    message:"精选正宗品质好食材",
                    url:"#",
                    src:require("../../../assets/images/footer/spaq.png")
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
ul,li{ list-style:none;}
a:link {color:inherit;text-decoration:none;}
a:visited {color:inherit;text-decoration:none;}
a:hover{color: #b28247}
a:active, a:focus {color:inherit;text-decoration:none;}

 a{
	color: #333;
	font-size: 12px;
}
 p{
	margin:0;
	padding:0;
}
 a:hover{
	text-decoration: underline;
}
 .footer_message_wrap{
	width:100%;
	background: #fff;
	clear: both;
	margin: 0 auto;
}
.footer_message_content{
	width:1200px;
    height: 119px;
	margin:0 auto;
    border-bottom: 1px solid #dcdcdc;
}
.footer_message{
	width: 180px;
	height: 70px;
	float: left;
	margin-top: 38px;
	margin-right:150px;
}
.footer_message:last-child{
    margin-right: 0;
}
.footer_message_wrap img{
	display: inline-block;
	cursor: pointer;
	vertical-align: top;
	float: left;
}
.footer_message_r{
	display: inline-block;
	float: right;
	width: 108px;
	height: 50px;
}
.footer_message_r .p1{
	font-weight: bold;
	height:32px;
	line-height: 32px;
	font-size: 22px;
	color: #333;
}
.footer_message_r .p2{
	font-size: 14px;
	color: #5f5f5f;
}

.footer_message_wrap ul{
	padding:0;
}


</style>
