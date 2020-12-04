// header组件
var cxHeader = Vue.component('cxHeader', {
    template: `<header class="flex">
        <img src="images/logo.png" alt="">
        <div class="right flex">
            <div class='grid' :class="{on:item.id == count}"
                 v-for="item in list" :key='item.id' 
                 @click="toPage($event)"
            >{{item.name}}</div>
            <div class="flex search">
                <img src="images/icon/icon_search.png" alt="b">
                <div class="flex inputArea">
                    <input type="text" placeholder="请输入搜索关键字">
                    <img src="images/icon/icon_search.png" alt="s">
                </div>
            </div>
        </div>
    </header>`,
    data() {
        return {
            list: [{
                name: '首 页',
                id: 0
            }, {
                name: '新闻中心',
                id: 1
            }, {
                name: '营商环境',
                id: 2
            }, {
                name: '政务公开',
                id: 3
            }, {
                name: '一网通办',
                id: 4
            }, {
                name: '产城人文',
                id: 5
            }]
        }
    },
    props: ['count'],
    methods: {
        toPage(e) {
            console.log(app);
            let _this = e.target.innerHTML;
            console.log(_this);
            switch (_this) {
                case '首 页':
                    app.mySwiper.slideTo(0, 500, false);
                    break;
                case '新闻中心':
                    app.mySwiper().slideTo(1, 500, false);
                    break;
                case '营商环境':
                    mySwiper.slideTo(2, 500, false);
                    break;
                case '一网通办':
                    mySwiper.slideTo(3, 500, false);
                    break;
                case '产城人文':
                    mySwiper.slideTo(4, 500, false);
                    break;
                case '政务公开':
                    PageTo('zwgk.html');
                    break;
            }
            //     // mySwiper.slideTo(0, 500, false);
        }
    }
});