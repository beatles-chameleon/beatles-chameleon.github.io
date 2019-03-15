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
                    <p class="f24">Chameleon</p>
                    <p class="f48">An overall solution for multi-platform development</p>
                    <div class="btn clearfix">
                        <div class="btn1 btn-defult"><a href="./doc/quick_start/quick_start.html">Quick Start</a></div>
                        <div class="btn2 btn-defult"><a href="https://github.com/didi/chameleon">Github</a></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="introduce">
                <p class="tc title">Chameleon will make it easier for you to develop multi-platform applications.</p>
                <p class="tc text">Meet all your needs for multi-platform development with a single codebase.</p>
                <div class="introduce-list main">
                    <ul class="clearfix">
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/16.png">
                            </div>
                            <p class="introduce-list-title">High Development Efficiency</p>
                            <p class="introduce-list-text">Powerful syntax checker.<br/>Designed with the best engineering ideas in the industry.</p>
                        </li>
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/17.png">
                            </div>
                            <p class="introduce-list-title">Easy to Maintain</p>
                            <p class="introduce-list-text">With polymorphic protocol, you can easily maintain multi-platform project within a single codebase.</p>
                        </li>
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/13.png">
                            </div>
                            <p class="introduce-list-title">Highly unified interfaces</p>
                            <p class="introduce-list-text">Highly unified of coding, UI behaviors, development workflow, etc.</p>
                        </li>
                    </ul>
                    <ul class="clearfix">
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/18.png">
                            </div>
                            <p class="introduce-list-title">Highly Extendable</p>
                            <p class="introduce-list-text">Based on polymorphic protocols, you can extend any native APIs that are not implemented yet.</p>
                        </li>
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/15.png">
                            </div>
                            <p class="introduce-list-title">Rich libs</p>
                            <p class="introduce-list-text">Unified Chameleon Native SDK.<br/>Rich components and API libs.</p>
                        </li>
                        <li>
                            <div class="introduce-list-img">
                                <img src="../images/14.png">
                            </div>
                            <p class="introduce-list-title">Progressive Integration</p>
                            <p class="introduce-list-text">Export native component with one-click.<br/>Directly import native components.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="platform">
                <div class="main">
                    <p class="tc title">Let's unify multi-platform development environments.</p>
                    <p class="tc text">A framework that really focuses on multi-platform development with a single codebase, providing a standard MVVM development model to unify all kinds of terminals.</p>
                    <div class="platform-img">
                        <img src="../images/en-architectrue.png">
                    </div>
                </div>
            </div>
            <bottom :qrcode="qrcode"></bottom>
        </div>
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
                    "text": "Study",
                    "navListChild" : [
                        {
                            "text" : "Tutorials",
                            "url" : "./doc/example/main.html" 
                        },
                        {
                            "text" : "Components",
                            "url" : "./doc/component/component.html" 
                        },
                        {
                            "text" : "API",
                            "url" : "./doc/api/api.html" 
                        }
                    ]
                },
                { 
                    "text": "Documents",
                    "navListChild" : [
                        {
                            "text" : "Demo",
                            "url" : "https://github.com/beatles-chameleon/cml-demo" 
                        },
                        {
                            "text" : "Community",
                            "url" : "https://github.com/didi/chameleon/wiki" 
                        },
                        {
                            "text" : "Awesome-cml",
                            "url" : "https://github.com/beatles-chameleon/awesome-cml"
                        }
                    ]
                },
                { 
                    "text": "中文"
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
