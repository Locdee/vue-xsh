<template>
      <!--公告footer-->
    <div id="boardcastInfo" class="boardcastInfo_wrap">
        <div class="boardcastInfo_content" >
            <div class="qrcode-div">
                <p class="qrcode-phone">{{tel}}</p>
                <p class="qrcode-worktime">{{worktime}}</p>
            </div>
            <dl id="aboutus" v-for="(aboutus,index) in aboutusData" :key="index" >
                <dt>
                    <span code="1001A11000000009GF5O">{{aboutus.name}}</span>
                </dt>
                <dd>
                    <div class="sp_wrap">
                        <a :href="item.url" target="_blank"  v-for="(item,index) in aboutus.items" :key="index" >{{item.name}}</a>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
    import aboutus from "../../../assets/json/aboutus.json"

export default {
    name:"FooterLink",
    data () {
        return{
            tel:"0769-85534622-8069",
            worktime:"周一至周五 09:00-18:00",
            aboutusData:aboutus
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
.boardcastInfo_wrap{
	padding-top: 22px;
	margin:0 auto;
	text-align: center;
    background: #fff;
}
.boardcastInfo_content{
	width: 1200px;
    height:190px;
	margin: 0 auto;
	border-bottom: 1px solid #dcdcdc;
}

.boardcastInfo_wrap dl {
	float: left;
	width: 100px;
	/* padding-left: 52px; */
	margin-left:80px;
}
.boardcastInfo_wrap dl dt {
	color: #333333;
	font-size: 16px;
	font-weight: 700;
	height: 30px;
	line-height: 30px;
	text-align: left;
	display: block;
}
.boardcastInfo_wrap dl dt img{
	width: 16px;
	height: 16px;
	padding: 4px 6px 0 10px;
}
.boardcastInfo_wrap dl dd {
	text-align: left;
	display: block;
	-webkit-margin-start: 40px;
	margin-left: 0;
}
.boardcastInfo_wrap dl a {
	display: block;
	width: 100px;
	overflow: hidden;
	text-align: left;
	height: 20px;
	line-height: 20px;
	color: #888888;
	text-decoration: none;
	margin:5px 0;
}
.boardcastInfo_wrap #qrcode a {
	width: 105px;
	height: 105px;
	line-height: 105px;
	text-align: center;
}
.qrcode-div{
	text-align: center;
	float: left;
	width: 460px;
	margin: 16px 0;
	background: url(../../../assets/images/footer/spaq.png) no-repeat 30px 35px;
	background-size: 55px;
	height: 147px;
}
.qrcode-phone{
	color: #333;
    text-align: left;
    padding-left: 110px;
    font-size: 30px;
    font-family: monospace;
    font-weight: bolder;
    margin-bottom: 12px;
}
.qrcode-worktime{
	color: #666;
    text-align: left;
    padding-left: 110px;
}


.w1200{

}
.sp_wrap{
	height:112px;
	/* padding-left:20px; */

}
.sp_wrap span{
	font-size: 12px;
	height:22px;
	line-height: 22px;
}

</style>
