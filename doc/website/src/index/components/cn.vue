<template>
    <div class="chn">
        <div class="top" ref="refTop">
            <div class="top-container">
                <img src="../images/banner.jpg" class="banner">
                <div class="header clearfix">
                    <div class="logo">
                        <img src="../images/logo.png">
                    </div>
                    <!-- PC导航 -->
                    <navpc :navList="navList" v-if="device == 'pc'"></navpc>
                    <!-- phone导航 -->
                    <navphone :navList="navList" v-if="device == 'phone'"></navphone>
                </div>
                <div class="top-container-cml">
                    <p class="f24">Chameleon 变色龙</p>
                    <p class="f48">一套代码运行多端，一端所见即多端所见</p>
                    <div class="btn">
                        <div class="btn1 btn-defult"><a href="./doc/quick_start/quick_start.html">快速开始</a></div>
                        <div class="btn2 btn-defult"><a href="https://github.com/didi/chameleon">Github</a></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="introduce">
                <p class="tc title">乘风破浪，助你多端开发一臂之力</p>
                <div class="introduce-list main">
                    <ul class="clearfix">
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/16.png">
                            </div>
                            <p class="introduce-list-title">开发效率高</p>
                            <p class="introduce-list-text">独创强大的跨多端语法检查功能<br>拥有业内最优秀工程化设计</p>
                        </li>
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/17.png">
                            </div>
                            <p class="introduce-list-title">可维护性好</p>
                            <p class="introduce-list-text">独创多态协议，轻松维护一套代码实现跨多端</p>
                        </li>
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/13.png">
                            </div>
                            <p class="introduce-list-title">多端高度一致</p>
                            <p class="introduce-list-text">代码、界面交互、开发流程等多层次统一</p>
                        </li>
                    </ul>
                    <ul class="clearfix">
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/18.png">
                            </div>
                            <p class="introduce-list-title">扩展性强</p>
                            <p class="introduce-list-text">基于多态协议，可以扩展任意底层接口，不强依赖框架的更新</p>
                        </li>
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/15.png">
                            </div>
                            <p class="introduce-list-title">基础库丰富</p>
                            <p class="introduce-list-text">统一的Chameleon Native SDK<br/>丰富的组件、API库</p>
                        </li>
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/14.png">
                            </div>
                            <p class="introduce-list-title">渐进式接入</p>
                            <p class="introduce-list-text">一键导出原生组件<br/>无污染引用原生组件</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="platform">
                <div class="main">
                    <p class="tc title">让MVVM跨端环境大统一</p>
                    <p class="tc text">真正专注于让一套代码运行多端的开发框架，提供标准的MVVM架构开发模式统一各类终端。</p>
                    <div class="platform-img">
                        <img src="../images/2.png">
                    </div>
                </div>
            </div>
        </div>
        <bottom :qrcode="qrcode"></bottom>
    </div>
</template>

<script>
import navpc from './navpc.vue';
import navphone from './navphone.vue';
import bottom from './bottom.vue';
export default {
    props: {
        device: {
            type: [String]
        }
    },
    data(){
        return{
            qrcode:"扫码关注Chameleon社区公众号",
            navList : [
                { 
                    "text": "学习",
                    "navListChild" : [
                        {
                            "text" : "教程",
                            "url" : "./doc/example/main.html" 
                        },
                        {
                            "text" : "组件",
                            "url" : "./doc/component/component.html" 
                        },
                        {
                            "text" : "API",
                            "url" : "./doc/api/api.html" 
                        }
                    ]
                },
                { 
                    "text": "生态",
                    "navListChild" : [
                        {
                            "text" : "Demo实例",
                            "url" : "https://github.com/beatles-chameleon/cml-demo" 
                        },
                        {
                            "text" : "社区",
                            "url" : "https://github.com/didi/chameleon/wiki" 
                        },
                        {
                            "text" : "Awesome-cml",
                            "url" : "https://github.com/beatles-chameleon/awesome-cml" 
                        }
                    ]
                },
                { 
                    "text": "English"
                }
            ]
        }
    },
    created(){

    },
    mounted(){
        this.topHeight();
    },
    methods:{
        topHeight(){
            this.$emit('topHeight', this.$refs.refTop)
        },
        navTab(item,index){
            if(item.text == "English"){
                this.$router.push({path: '/en'});
                return false;
            }

            if(item.url){
                location.href = item.url;
                return false;
            }

            if(this.isShow == index){
                this.isShow = null;
            }else{
                this.isShow = index;
            }
        }
    },
    watch:{
    },
    components:{
        navpc,
        navphone,
        bottom
    }
}
</script>

<style lang="less">
</style>
