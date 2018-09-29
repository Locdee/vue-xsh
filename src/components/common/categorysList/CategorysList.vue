<template>
    <div class="ui-category-btm" @mousemove="categorysflag = true" @mouseout="isCategorysShow">
        <div class="J-collapse">
            <div class="ui-category-collapse">
                <span class="icon icon-category category_1"></span>
                <label>{{categoryall}}</label>
                <span class="ui-category-collapse-icon J-arrow"></span>
            </div>
        </div>
		<!-- 一级菜单-->
		<div class="J-category-content ui-category-content" v-show="categorysflag" >
			<div  v-for="(category,index) in categorys" :key=index  >
				<div class="sidebox_title item_seperator" @mousemove="category.flag = true" @mouseout="category.flag = false">			
					<a :id="category.id" class="title_text font_yahei J-ProductList">{{category.name}}</a>
					<a href="#" class="numicon" v-show="category.flag"></a>
				</div>
				<div class="floatrelated sidebox_inner_content effectSlide" v-show="category.flag" @mousemove="category.flag = true" @mouseout="category.flag = false">
					<!--二级菜单-->
					<!-- <ul class="category_list" v-if=category.children > -->
						<!-- <li class="category_2nd_li"  v-for="(children,index) in category.children" :key=index> -->
							<!-- <a href="#" :id="children.id" class="category_2nd_a J-ProductList"> -->
								<!-- <span class="menu_dot_gray"></span> -->
								<!-- <span class="menu_text">{{children.name}}</span> -->
							<!-- </a> -->
							<div class="J-ProductList" v-if=category.children >
								<div class="submenu">
									<div class="menu_content">
										<div class="w_100ps" v-for="(children,index) in category.children" :key=index>
											<!-- 三级菜单-->
											<div class="menu_title nc-field-long-hide"  >
												<nobr>
													<a class="J-ProductList" href="#" :id="children.id">{{children.name}}</a>
                          <a href="#" class="numicon"></a>
												</nobr>
											</div>
											<ul class="menu_list"  v-if=children.children >
												<!-- 四级菜单 -->
												<li v-for="(children,index) in children.children" :key=index>
													<a class="J-ProductList" href="#" :id="children.id">{{category.name}}{{children.name}}</a>
												</li>
											</ul>
											<div class="clear"></div>
										</div>
									</div>
								</div>
							</div>
						<!-- </li> -->
					<!-- </ul> -->
				</div>
			</div>
		</div>
       
    </div>
</template>
<script>
var categorysData = require('../../../assets/json/categorys.json');
export default {
    name:'CategorysList',
    data (){
        return{
            hold:{
              cid:"cid",
              name:"name"
            },
            categoryall:"全部商品分类",//attrs.TRANSLATE.CATEGORYALL
            categorys:categorysData,
            categorysflag:true
        }
    },
    methods:{
      isCategorysShow(){
        if(this.$route.path == "/"){
          this.categorysflag = true
        }else{
          this.categorysflag = false
        }
      }
    },
    created(){
      this.isCategorysShow()
    },
    watch:{
      "$route":"isCategorysShow"
    }
}
</script>
<style lang="scss" scoped>
.ui-category-content{
	background-color: #008bca;
	max-height: 613px;
	min-height: 410px;
	margin-top:0;
	overflow-y: auto;
	overflow-x: hidden;
}
.ui-category-content {
  z-index: 101;
  width: 100%;
  float: left;
  margin-top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  height: 409px;
  background-color: #ffffff;
}
.ui-category-btm {
  font-size: 14px;
  width: 190px;
  /*float:left;*/
  position: relative;
}
/*.ui-category-btm{
	height: 430px;
	background-color: @color-base;
	overflow-y: auto;
}*/
.ui-category-collapse {
  padding: 0;
  line-height: 40px;
  height: 40px;
  font-size: 14px;
  color: #f1bf03;
  /*font-weight: bolder;*/
  width: 100%;
  background-color: #333333;
  text-align: center;
}
.ui-category-relative .ui-category-collapse {
  color: #f1bf03;
  background-color: #333333;
  width: 190px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.ui-category-relative .ui-category-collapse-icon-close {
  border-top: #FFFFFF solid 6px;
}
.ui-category-relative .ui-category-collapse-icon-open {
  border-bottom: #FFFFFF solid 6px;
}
.ui-category-collapse-icon-close {
  border-left: transparent solid 6px;
  border-right: transparent solid 6px;
  border-top: white solid 6px;
  position: relative;
  top: 13px;
  left: 62px;
}
.ui-category-collapse-icon-open {
  border-left: transparent solid 6px;
  border-right: transparent solid 6px;
  border-bottom: white solid 6px;
  position: relative;
  top: -12px;
  left: 62px;
}
.ui-category-collapse span.open {
  background-position: -26px -62px;
}
.ui-category-collapse span.close {
  background-position: 0px -62px;
}
/*左边栏框背景*/
.ui-category-btm .sidebox {
  float: left;
  width: 223px;
  margin-top: 9px;
}

.ui-category-btm .sidebox_inner_content {
    
  left: 190px;
  background: #fff;
  width: 550px;
  height: 410px;
  padding: 0;
  text-indent: 10px;
}
.ui-category-btm .sidebox_inner_content.floatrelated {
  position: absolute;
  z-index: 500;
}

/*左边栏标题*/
.ui-category-btm .sidebox_title {
  float: left;
  width: 100%;
  height: 45px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
}
.ui-category-btm .sidebox_title:hover{
  background-color: #f7f7f7;
  color: #0082bc;
}
// .ui-category-btm .sidebox_title_all {
//   display: none;
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 31px;
//   line-height: 31px;
//   text-indent: 19px;
//   background-color: #0082bc;
// }
// .ui-category-btm .sidebox_title_all a.title_text {
//   color: #232323;
//   text-decoration: none;
//   font-size: 12px;
// }
.ui-category-btm .sidebox_title .title_text {
  float: left;
  line-height: 45px;
  font-size: 14px;
  text-decoration: none;
  color: #232323;
  cursor: pointer;
  padding-left: 30px;
  width: 65%;
  /* font-weight: bolder; */
  height: 100%;
}

.ui-category-btm .sidebox_title .title_text:hover{
  color: #0082bc;
}



.ui-category-btm .sidebox_title .trigger {
  float: right;
  top: 15px;
  position: absolute;
  right: 20px;
}
.ui-category-btm .sidebox_inner_content .trigger {
  float: right;
  margin: 15px 6px 0 6px;
}

/*分类二级菜单*/


.ui-category-relative .submenu {
  left: 190px;
  top: 40px;
}
.ui-category-btm .submenu .border_top,
.submenu .border_btm {
  float: left;
  width: 388px;
  height: 12px;
}
.ui-category-btm .submenu .border_top {
  background-position: 0 0;
}
.ui-category-btm .submenu .border_btm {
  background-position: 0 -12px;
}
.ui-category-btm .submenu .border_lft {
  float: left;
  width: 100%;
//   background: url(../../../assets/images/category/submenu_border_hor.png) repeat-y;
}
.ui-category-btm .submenu .border_rit {
  float: left;
  width: 388px;
  padding: 0 12px;
  display: inline;
//   background: url(../../../assets/images/category/submenu_border_hor.png) right repeat-y;
}
.ui-category-btm .submenu .menu_content {
  float: left;
  font-size: 12px;
  /* background-color: rgba(250,189,0,0.8); */
  border-left: 0;
  margin: 0 15px 15px 0;
}
.ui-category-btm .submenu .menu_arrow {
  position: absolute;
  z-index: 3;
  width: 8px;
  height: 15px;
  margin-left: -13px;
//   background: url(../../../assets/images/category/submenu_arrow_left.png) no-repeat;
}
.ui-category-btm .submenu .menu_title {
  float: left;
  width: 122px;
  line-height: 16px;
  text-align: left;
  text-indent: 20px;
  margin-top: 15px;
}
.ui-category-btm .submenu .menu_title a {
  color: #333333;
  font-weight: bold;
  text-decoration: none;
}
.ui-category-btm .submenu .menu_title a:hover {
  /*text-decoration: underline;*/
  color: #0082bc;
}
.ui-category-btm .submenu .menu_list {
  float: left;
  // width: 568px;
  list-style: none;
  margin: 0;
  margin-top: 7px;
  padding: 0;
  /*border-left: 1px solid #d2d2d2;*/
}
.ui-category-btm .submenu .menu_list li {
  float: left;
  line-height: 16px;
  margin: 5px 0;
  padding: 0 10px;
  display: inline;
  border-left: 1px solid #cccccc;
  text-indent: 0px;
}
.ui-category-btm .submenu .menu_list li a {
  color: #4d4d4d;
  text-decoration: none;
}
.ui-category-btm .submenu .menu_list li a:hover {
  /*text-decoration: underline;*/
  color: #0082bc;
}
.ui-category-btm .nc-field-long-hide {
  overflow: hidden;
  text-overflow: clip;
}
.ui-category-btm .hidden {
  display: none;
}
.ui-category-relative {
  position: relative;
}
.ui-category-absolute {
  position: absolute;
  z-index: 101;
  padding: 0;
  float: left;
  background-color: white;
}
.ui-category-collapse .icon-category {
  position: relative;
  left: 14px;
}
.ui-category-btm .submenu .menu_title .menu_title_name {
  display: inline-block;
  width: 65px;
  text-indent: 0px;
  text-align: right;
}
/*滚动条样式*/
.scrollbar::-webkit-scrollbar {
  width: 10px;
}
.scrollbar::-webkit-scrollbar-thumb {
  /*background: #F7B9BA;*/
  /*border: 5px solid #EC5051;*/
  background: #fff;
  border-radius: 10px;
}
.scrollbar::-webkit-scrollbar-track-piece {
  /*background: #EC5051;*/
  background: #fff;
}
/*分类弹出层*/
.ui-category-content .cate_pop {
  position: absolute;
  top: 39px;
  left: 190px;
  border: 2px solid #fff;
  background-color: #fff;
  box-shadow: 0 0 10px 3px #f0f0f0;
  width: 730px;
  height: 401px;
  border-left: none;
  z-index: 500;
  overflow: hidden;
}

.cate_pop .separate_line {
  border-top: 1px solid #DDDDDD;
  margin: 0 20px 0;
  clear: both;
}

.submenu .menu_wrap {
  height: 25px;
}
.cate_pop .subMenuWrap {
  overflow-y: auto;
  padding-bottom: 15px;
}
.numicon {
    height: 40px;
    width: 8px;
    // background: url(../../assets/images/category/y.png) no-repeat center center;
    display: block;
    float: right;
    margin-right: 20px;
}
.menu_title .numicon{
    height: 14px;
    width: 8px;
}
</style>
