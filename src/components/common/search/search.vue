<template>
    <div class="search_bar">
        <form id="searchBar" method="post">
            <input id="productName" name="productName" class="hidden"> <input  id="search" name="search" class="hidden">
                 <label class="input_blur"> 
                     <input id="searchInput" type="text"   title="" class="blur" placeholder="INPUTPRODUCTNAMEORID" /> </label>
            <div class="floatleft">
                <a class="search_btn">
                    <div class="search_content">{{ADVANCEDSEARCH}}</div>
                </a>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
         name: "Search",
         data () {
            return {
                        INPUTPRODUCTNAMEORID:"请输入商品名称",
                        ADVANCEDSEARCH:"搜索"
                    
            }
        }
    };
</script>
<style scoped>
.search_bar {
	float: left;
	height: 29px;
	/*font-family: "宋体",SimSun,serif;*/
	font-size: 16px;
	/*margin-left:50px;*/
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #FFFFFF;
	letter-spacing: 0;
}
.search_bar input {
	width:499px;
	float: left;
	height: 34px;
	line-height: 34px !important;
	border: 2px solid #fabd00;
	border-right: none;
	padding-left: 10px;
	box-sizing: content-box;
	/*background:#232323;*/
}
.search_bar label.input_blur {
	/*background: url(../img/search_bar_bg.png) 0 0 no-repeat;*/
}
::-webkit-input-placeholder {
	-webkit-text-security: none;
	color: #000000;
	pointer-events: none;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
　　color: #000000;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
　　color: #000000;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
　　color: #000000;
}

.search_bar label.input_hover {
	/*background: url(../img/search_bar_bg.png) 0 -30px no-repeat;*/
}

.search_bar label.input_focus {
	/*background: url(../img/search_bar_bg.png) 0 -60px no-repeat;*/
}

.search_bar label input.focus {
	color: #2b2b2b;
}

.search_bar label input.blur {
	color: #bababa;
}

.search_bar label input:focus {
	outline: none;
}

.hidden{
	display: none;
}
.search_content {
	height: 40px;
	line-height: 40px;
	width: 106px;
	text-align: center;
	color: #333333;
	background-color: #fabd00;
}

/*.search_content:hover{
	background-color: #15B0F6;
}
.search_content:active{
	bakcgournd-color:#0E6F9C;
}*/

</style>
