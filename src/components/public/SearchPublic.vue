<template>
    <div class="search_bar">
        <form id="searchBar" method="post">
            <input id="searchInput" type="text"
                title="" class="blur" :placeholder="holder" />
            <div class="pubsearchbtn">
                <a class="search_btn"><div class="search_content">{{advancedsearch}}</div>
                </a>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
         name: "SearchPublic",
         data () {
            return {
                    holder:"请输入商品名称",
                    advancedsearch:"搜索"
            }
        }
    };
</script>
<style scoped>
.search_bar {
	float: left;
	height: 29px;
	font-family: "微软雅黑",SimSun,serif;
	font-size: 12px;
	margin-left:10px;
    margin-top:22px;
}
.search_bar input {
	width: 621px;
	float: left;
	padding: 0;
	height:40px;
	line-height: 40px !important;/*css ie8 hack*/
	border: 2px solid #333;
	border-right: none;
	margin: 0;
	padding-left: 10px;
	display: inline-block;
	background-color: #fff;
}
.search_bar label.input_blur {
	/*background: url(../img/search_bar_bg.png) 0 0 no-repeat;*/
}

.search_bar label.input_hover {
	/*background: url(../img/search_bar_bg.png) 0 -30px no-repeat;*/
}

.search_bar label.input_focus {
	/*background: url(../img/search_bar_bg.png) 0 -60px no-repeat;*/
}

.search_bar input.focus {
	color: #2b2b2b;
}

.search_bar input.blur {
	color: #333;
}

.search_bar input:focus {
	outline: none;
}
::-webkit-input-placeholder {
	-webkit-text-security: none;
	color: #bababa;
	pointer-events: none;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	　　color: #bababa;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
	　　color: #bababa;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
	　　color: #bababa;
}
.hidden{
	display: none;
}
.search_content {
	height: 44px;
	line-height: 44px;
    width:110px;
	text-align: center;
	color: #fff;
	background-color: #333;
	font-size: 18px;
    cursor: pointer;
}
.pubsearchbtn{
	display: inline-block;
}

</style>
