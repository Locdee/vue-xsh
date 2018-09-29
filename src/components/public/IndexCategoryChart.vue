<template>
    <div class="indexcategorychart" id="hp-featuresource" style="">
        <div class="hp-featuresource-item featureitem5 item0" v-for="(category,index) in categorys" :key=index v-if="index < 8">
            <a class="leftContainer" href="#" target="_blank">
                <div class="title fd-clr">
                    <div class="fd-left">{{category.name}}</div>
                </div>
                <div class="subTitle">{{category.name}}</div>
                <img :src="src" class="featureimg">
                <div class="tagContainer">
                    <div class="tag" style="background-color: #fabd00">品牌直销</div>
                    <div class="tag" style="background-color: #fabd00">品质保证</div>
                </div>
            </a>
            <div class="centerContainer" >
                <div class="topContainer">
                    <a class="topItemLink" href="#" target="_blank" v-for="(children,index) in category.children" :key=index v-if="index <= 2">
                        <div class="itemTitle" v-for="(children,index) in children.children" :key=index v-if="index < 1" >{{children.name}}</div>
                        <div class="itemSubTitle subTitle0">{{children.name}}</div>
                        <img :src="src" class="itemImg">
                    </a>
                </div>
                <div class="bottom-container-tpl5" v-for="(children,index) in category.children" :key=index>
                    <div class="tpl5-item"  v-for="(children,index) in children.children" :key=index v-if="index < 8" >
                        <a class="tpl5-link" href="#">{{children.name}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
 var categorysData = require('../../assets/json/categorys.json');

export default {
    name:'IndexCategoryChart',
    data(){
        return{
            categorys:categorysData,
            src:require('../../assets/images/header/logo.jpg')
        }
    }
}
</script>
<style lang="scss" scoped>
    // #category .J-category-content{
    //         display: block!important;
    // }
    #hp-featuresource .hp-featuresource-item:nth-child(odd) {
        margin-right: 20px;
	}
	#hp-featuresource .hp-featuresource-item {
		margin-bottom: 20px;
	}
		#hp-featuresource .hp-featuresource-item {
		float: left;
		width: 590px;
		height: 320px;
		background: #fff;
		box-sizing: border-box;
		border: 1px solid #ededed;
	}
	#hp-featuresource .hp-featuresource-item .leftContainer {
		float: left;
		padding-top: 20px;
		padding-left: 20px;
		width: 200px;
		height: 100%;
		box-sizing: border-box;
		border-right: 1px solid #ededed;
		position: relative;
		background: #F4F4F4;
	}
	#hp-featuresource .hp-featuresource-item .leftContainer .title {
		font-size: 18px;
		color: #333;
		font-weight: 700;
	}
	#hp-featuresource .hp-featuresource-item .leftContainer .subTitle {
		font-size: 12px;
		color: #888;
	}
	
	#hp-featuresource .hp-featuresource-item .leftContainer .featureimg {
		width: 175px;
		height: 175px;
		margin-top:20px;
		margin-left: -8px;
	}
	#hp-featuresource img {
		transition: transform .3s;
	}
	#hp-featuresource .hp-featuresource-item .leftContainer .tagContainer {
		overflow: hidden;
		position: absolute;
		bottom: 20px;
	}
	#hp-featuresource .hp-featuresource-item .leftContainer .tagContainer .tag {
		float: left;
		width: 73px;
		height: 23px;
		line-height: 23px;
		text-align: center;
		color: #fff;
		margin-right: 5px;
		font-size: 12px;
		font-weight: 700;
	}
	#hp-featuresource .hp-featuresource-item .centerContainer {
		float: left;
		overflow: hidden;
		width: 388px;
		height: 100%;
		box-sizing: border-box;
	}
	#hp-featuresource .hp-featuresource-item .centerContainer .topContainer {
		overflow: hidden;
		height: 229px;
		border-bottom: 1px solid #ededed;
	}
	#hp-featuresource .hp-featuresource-item .centerContainer .topContainer .topItemLink {
		width: 128px;
		float: left;
		text-align: center;
	}
	#hp-featuresource .hp-featuresource-item .centerContainer .topContainer .topItemLink .itemTitle {
		font-size: 16px;
		color: #333;
		margin-top: 21px;
	}
	/* #hp-featuresource .hp-featuresource-item .centerContainer .topContainer .topItemLink .subTitle1, #hp-featuresource .hp-featuresource-item .centerContainer .topContainer .topItemLink .tag0 {
		display: none;
	} */
	#hp-featuresource .hp-featuresource-item .centerContainer .topContainer .topItemLink .itemSubTitle {
		font-size: 12px;
		color: #666;
	}
	#hp-featuresource .hp-featuresource-item .centerContainer .topContainer .topItemLink .itemImg {
		width: 105px;
		margin-top: 30px;
	}
	#hp-featuresource .hp-featuresource-item.featureitem5 .bottom-container-tpl5 {
		width: 340px;
		overflow: hidden;
		padding: 22px 28px;
	}
	#hp-featuresource .hp-featuresource-item.featureitem5 .bottom-container-tpl5 .tpl5-item {
		width: 24%;
		text-align: left;
		display: inline-block;
	}
	#hp-featuresource .hp-featuresource-item.featureitem5 .bottom-container-tpl5 .tpl5-item .tpl5-link {
		width: 90%;
		color: #333;
		display: block;
		overflow: hidden;
		margin-bottom: 4px;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	#hp-featuresource .featureimg:hover{
		width:185px !important;
		height: 185px !important;
		margin-top:15px !important;
		margin-left:-13px !important;
	}
	#hp-featuresource .itemImg:hover{
		width:115px !important;
		height: 115px !important;
		margin-top:25px !important;
	}
	#hp-featuresource .title:hover,#hp-featuresource .itemTitle:hover,#hp-featuresource .tpl5-link:hover {
		color:#fabd00 !important;
	}
</style>
