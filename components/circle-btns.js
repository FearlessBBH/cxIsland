// 悬浮原型按钮组件
Vue.component('circleBtns', {
    template: `<div class="circlebtns flex ">
                   <div class="grid" title="微信">
                       <img src="images/icon/icon_wx.png " alt="微信">
                       <i>
                           <img src="images/icon/eq.png" alt="">
                       </i>
                   </div>
                   <div class="grid" title="领导信箱">
                       <img src="images/icon/icon_mail.png " alt="领导信箱">
                   </div>
                   <div class="grid" title="意见建议">
                       <img src="images/icon/icon_helper.png " alt="意见建议">
                   </div>
                   <div class="grid" title="征集调查">
                       <img src="images/icon/icon_page.png " alt="征集调查">
                   </div>
               </div>`
});