<template>
    <div class="register-model">
        <div class="content">
            <div class="promptTitle">{{translate.CREATEUSER}}</div>
            <div class="signupbox">
                <div class="signupwrap">
                    <div class="error" style="display:none;">
                        <span></span>
                    </div>
                    <form id="signupform" class="signupform" method="post" action="">
                            <tr>
                                <td class="label">
                                    <label id="lname" for="name">{{translate.NAME}}</label>
                                </td>
                                <td class="field">
                                    <input id="name" name="name" type="text" value="" :title="translate.INPUTNAME" />
                                </td>
                                <td class="status"></td>
                            </tr>
                            <tr>
                                <td class="label">
                                    <label id="lpassword" for="password">{{translate.PASSWORD}}</label>
                                </td>
                                <td class="field">
                                    <input id="password" class="hidden" name="password" type="hidden" value="" />
                                    <span class="requrie">*</span>
                                    <input id="passwordNoEnc" class="textfiled" name="passwordNoEnc" type="password" value="" :title="translate.INPUTPASSWORD" />
                                </td>
                                <td class="status"></td>
                            </tr>
                            <tr>
                                <td class="label">
                                    <label id="lpasswordConfirm" for="passwordConfirm" >{{translate.CONFRIMPASSWORD}}</label>
                                </td>
                                <td class="field">
                                    <input id="passwordConfirm" class="hidden" name="passwordConfirm" type="hidden" value="" />
                                    <span class="requrie">*</span>
                                    <input id="passwordConfirmNoEnc" class="textfiled" name="passwordConfirmNoEnc" type="password" value="" :title="translate.INPUTAGINPASSWORD" />
                                </td>
                                <td class="status"></td>
                            </tr>
                            <tr>
                                <td class="label">
                                    <label id="lcompanyname" for="companyname">{{translate.COMPANYNAME}}</label>
                                </td>
                                <td class="field">
                                    <input id="companyname" class="J-noRequire" name="companyname" type="text" value="" :title="translate.INPUTCOMPANYNAME" />
                                </td>
                                <td class="status"></td>
                            </tr>
                            <tr>
                                <td class="field" colspan="3">
                                    <hr/>
                                </td>
                            </tr>
                            <tr>
                                <td class="label">
                                    <label id="llinkman" for="linkman">{{translate.LINKMAN}}</label>
                                </td>
                                <td class="field">
                                    <span class="requrie">*</span>
                                    <input id="linkman" name="linkman" type="text" value="" :title="translate.INPUTLINKMAN" />
                                </td>
                                <td class="status"></td>
                            </tr>
                            <tr>
                                <td class="label">
                                    <label id="laddress" for="address">{{translate.ADDRESS}}</label>
                                </td>
                                <td class="field">
                                    <input type="hidden" name="country" value="0001Z010000000079UJJ"/>
                                    <select id="province" name="province">
                                        <option>{{translate.PLEASESELECT}}</option>
                                    </select>

                                    <select id="city" name="city">
                                        <option>{{translate.PLEASESELECT}}</option>
                                    </select>
                                <!-- </td>
                                <td class="field"> -->
                                    <select id="vsection" name="vsection">
                                        <option>{{translate.PLEASESELECT}}</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="label">
                                    <label id="ldetailinfo" for="detailinfo">{{translate.DETAILINFO}}</label>
                                </td>
                                <td class="field">
                                    <input id="detailinfo" class="J-noRequire" name="detailinfo" type="text" value="" :title="translate.INPUTDETAILINFO"/>
                                </td>
                                <td class="status"></td>
                            </tr>
                            <tr>
                                <td class="label">
                                    <label id="ltelephone" for="telephone">{{translate.TELEPHONE}}</label>
                                </td>
                                <td class="field">
                                    <span class="requrie">*</span>
                                    <input id="telephone" name="telephone" type="text" value="" :title="translate.INPUTTELEPHONE" />
                                <!-- </td>
                          
                            <td class="field"> -->
                            <input type="button" id="getverificationcode" :value="translate.GETVERIFICATIONCODE"/>
                            <input type="hidden" id="randomcode" name="randomcode"/>
                            </td>
                            <td class="status"></td>
                            </tr>
                            <tr>
                            <td class="label">
                              <label id="lverificationcode" for="verificationcode">{{translate.VERIFICATIONCODE}}</label>
                            </td>
                            <td class="field">
                                <span class="requrie">*</span>
                                <input id="verificationcode" name="verificationcode" type="text" value="" :title="translate.INPUTVERIFICATIONCODE" maxlength="6"/>
                            </td>
                            <td class="status"></td>
                            </tr>
                            <tr>
                                <td class="label">
                                </td>
                                <td class="field" colspan="4">
                                   <input id="temrs"  type="checkbox" name="terms" checked />
                                    <label class="lterms" for="terms">{{translate.HADREAD}}<a href="#" style="cursor: not-allowed;" :title="暂时无注册须知">{{translate.PROTOCOL}}</a></label>
                                </td>
                            </tr> 
                            <tr>
                                <td class="label">
                                </td>
                                <td class="field">
                                    <input class="signupsubmit J-signupsubmit" name="signup" type="submit" :value="translate.REGISTER" />
                                    <input class="signupsubmit J-signupsubmitProcess" name="signup" type="button" :value="translate.REGISTERING" style="display: none;">
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import translate from "../../../assets/json/register.json";

export default {
    name:"registerModel",
    data(){
        return{
            translate:translate[0]
        }
    },
    created(){
        console.log(this.translate)
    }
}
</script>

<style lang="scss" scoped>
/* web-font */

// label.checked:before { content: '\e800' !important; } /* '' */
// label.error:before { content: '\e801'; } /* '' */

a:link { color:#0060BF; text-decoration: underline; }
a:visited { color:#0060BF; text-decoration: underline; }
a:active { color:#0060BF; text-decoration: underline; }
a:hover { color:#000000; text-decoration: underline; }
/* Content */
.content {
   margin: 0 auto;
   width: 839px;
   /*height: 473px;*/
   /*margin-top: 160px;*/
   text-align: center;
   /*background:url("../img/bg_register.png");*/
}
.signuptop-container{
   width:902px;
   margin: 0 auto;
}
.signup-:title{
   /*width: 50px;*/
   font-size: 24px;
   /*text-align: center;*/
}
.promptTitle {
   font-size: 23px;
   padding-left: 45px;
   font-weight: bold;
}
/* Signup box */

.signupbox {
   width: 100%;
   text-align: center;
   padding: 10px 0px 0px 100px;
}

.signupwrap {
   text-align: left;
   clear: both;
}

/* error */
div.error {
	color: red;
	margin-left: 135px;
	position: absolute;
	margin-top: 10px;
}

/* Signup form */

.signupform table {
   margin-top: 30px;
   border-spacing: 0px;
   border-collapse: collapse;
   empty-cells: show;
}

.signupform .label {
   padding-top: 5px;
   padding-right: 18px;
   padding-left: 110px;
   vertical-align: top;
   text-align: right;
   width: 125px;
   white-space: nowrap;
}

.signupform .field {
   padding-bottom: 10px;
   white-space: nowrap;
   position: relative;
}

.signupform .field input{
   width: 380px;
   padding: 6px 3px 6px 0;
   margin: 0px;
   border: 1px solid #cfcfcf;
}

.signupform .field .requrie {
   color: red;
   position: absolute;
   width: 15px;
   color: red;
   top: 7px;
   left: -18px;
}

.inputtext {
   border: 1px solid red;
}

.signupform .status {
   padding-top: 5px;
   padding-left: 8px;
   vertical-align: top;
   width: 350px;
   white-space: nowrap;
}

.signupform label.error {
   font-family: "fontello";
   padding-left: 16px;
   padding-bottom: 2px;
   color: #EA5200;
   white-space: pre-wrap;
}

.signupform label.checked {
   font-family: "fontello";
   color: #008000 !important;
}

.signupform .success_msg {
   font-weight: bold;
   color: #0060BF;
   margin-left: 19px;
}

.signupform .termswrap {
   position: relative;
   padding-bottom: 5px;
   line-height: 20px;
}

.signupform .terms {
   position: absolute;
}

.signupform .lterms {
   font-weight: normal;
   padding-left: 20px;
}
.signupform {
   font-weight: normal;
   padding-left: 20px;
}
.submitcontainer{
   margin: 90px 0;
   padding-left: 40px;
}
.signupform .field .signupsubmit {
   font-size: 15px;
   color: #333;
   height: 35px;
   width: 286px;
   background: #fabd00;
   border: none;
}

.disabled {
   background: #C8C8C8 !important;
}

.top_banner_bg {
	top: 100px !important;
}

#search {
    display: none;
}

#twodimensioncode {
    display: none;
}

#province,#city,#vsection {
   width: 126px;
   padding: 6px 0 6px 0;
   margin: 0px;
   border: 1px solid #cfcfcf;
}
#telephone{
   width: 276px;
}
#getverificationcode {
    border: none;
	width: 100px;
	background: #E6E6E6;
    cursor: pointer;
}

#temrs {
	width: 40px;
}

.lterms {
	position: relative;
	left: -18px;
}
.lterms a{
    color: #fabd00;
}
.signup_hr{
   margin: 60px 0;
   height: 1px;
   border: none;
   border-top: 1px solid #eee;
}
</style>
