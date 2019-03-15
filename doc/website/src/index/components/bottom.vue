<template>
    <div class="bottom">
        <div class="main clearfix">
            <div class="row">
                <img src="../images/qrcode.png">
                <p>{{qrcode}}</p>
            </div>
            <div class="cml-logo">
                <img src="../images/4.png">
                <p class="cml-logo-text">Released under the Apache License<br/>Copyright © 2012-2018 Didi Chuxing. All Rights Reserved</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navList: {
            type: [Array]
        },
        qrcode:{
            type: [String]
        }
    },
    data(){
        return{
            isShow : null
        }
    },
    computed: {

    },
    created(){
    },
    mounted(){
    },
    methods:{
        navTab(item,index){
            if(item.text == "English"){
                this.$router.push({path: '/en'});
                return false;
            }

            if(item.text == "中文"){
                this.$router.push({path: '/'});
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
    }
}
</script>

<style lang="less">
    .bottom{
        width: 100%;
        min-height: 35%;
        background-color:#3B3E4D;
        .cml-logo{
            width: 40%;
            float: left;
            margin-top: 60px;
            margin-left:7%;
            padding-right:4%;
            padding-bottom:60px; 
            img{
                width: 24%;
            }
            .cml-logo-text{
                font-size:12px;
                color:#7A8899;
                line-height:16px;
                margin-top:4px;
            }
        }
        .row{
            float: right;
            padding-top:60px;
            width:30%;
            min-width:192px;
            img{
                display: block;
                width: 40%;
                height:40%;
                margin:0px auto;
            }
            p{
                color:#7A8899;
                font-size:12px;
                text-align:center;
                padding-top:10px;  
            }
            .link-column{
                float: left;
                margin-right:10%;
                .link-column-title{
                    font-size: 12px;
                    color: #7A8899;
                    padding-bottom: 10px;
                }
                a{
                    display: block;
                    text-decoration: none;
                    font-size: 14px;
                    color: #AFB7C2;
                    margin-top: 10px;
                    line-height: 20px;
                }
                ul{
                    margin-top: 10px;
                    li{
                        float: left;
                        margin-right:24px;
                        min-height:50px;
                    }
                    li:last-child{
                        margin-right:0px;
                    }
                }
            }
            .link-column:last-child{
                margin-right:0px;
            }
        }
    }
    @media only screen and(max-width:600px){
        .bottom{
            .cml-logo{
                width: 100%;
                float: none;
                border-right: 0px;
                margin: 0px auto;
                padding-top:20px;
                padding-bottom:30px; 
                padding-left:20px;
                img{
                    width: 24%;
                    display: block;
                }
            }
            .row{
                float: none;
                padding-bottom:20px;
                padding-left:20px;
                padding-top:40px;
                img{
                    width: 100%;
                }
                .link-column{
                    ul{
                        max-width:120px;
                        margin-top:10px;
                    }
                }
            }
        }
    }
</style>
