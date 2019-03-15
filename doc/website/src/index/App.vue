<template>
    <div id="app">
        <router-view @topHeight="topHeight" :device="device"></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            device : ""
        }
    },
    created(){
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.device = document.body.clientWidth > 600 ? 'pc' : 'phone';
        },
        topHeight(ref) {
            if(document.body.clientWidth >= 2000){
                ref.style.height = '700px';
            }else{
                console.log((1400/4000)*document.body.clientWidth)
                ref.style.height = (1400/4000)*document.body.clientWidth + 'px';
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
    *{;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
    html,body{
        padding: 0px;
        margin:0px;
        height: 100%;
        width: 100%;
    }

    ul,li,dl,dt,dd,p{
        list-style: none;
        margin: 0px;
        padding:0px;
    }

    img{
        margin: 0px;
        padding: 0px;
    }

    .clearfix:after{
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }

    .clearfix {
      /* 触发 hasLayout */
      zoom: 1;
    }

    a{
      text-decoration: none;
    }

    .tc{
      text-align: center;
    }

    .main{
      max-width:1024px;
      margin: 0px auto;
    }

    .f24{
        font-size: 24px;
        line-height: 24px;
    }

    .f48{
        font-size: 48px;
        line-height: 48px;
    }

    .title{
        font-size: 24px;
        color: #474D66;
        line-height: 36px;
        padding-top:4.8%;
    }

    .text{
        font-size: 14px;
        color: #474D66;
        line-height: 20px;
        margin-top:0.8%;
        margin-bottom:5.2%;
        padding: 0px 20px;
    }

    .top{
        width: 100%;
        background:#15143c;
        .top-container{
            max-width: 2000px;
            position: relative;
            margin: 0px auto;
            height: 100%;
            .banner{
                width: 100%;
                height: 100%;
                display: block;
            }
            .header{
                width: 100%;
                position: absolute;
                padding-top: 24px;
                top: 0px;
                .logo{
                    width: 10%;
                    min-width:100px;
                    margin-left: 3.5%;
                    float: left;
                    img{
                        display:block;
                        width: 100%;
                    }
                }
            }
            .top-container-cml{
                position: absolute;
                height: 100%;
                width: 100%;
                top: 30%;
                left: 0px;
                padding: 0px 10px;
                p{
                    color:#fff;
                    text-align: center;
                    padding-bottom:3.5%;
                }
            }
        }
    }

    .btn{
        margin: 0px auto;
        width: 296px;
        .btn-defult{
            width: 128px;
            height: 36px;
            border-radius: 20px;
            border: 1px solid #fff;
            float: left;
            color: #fff;
            text-align: center;
            line-height: 36px;
            font-size: 13px;
            margin: 0px 10px;
            a{
                display: block;
                width: 100%;
                height: 100%;
                color:#fff;
                cursor: pointer;
            }
        }
    }

    .content{
        width: 100%;
        .introduce{
            max-width: 1024px;
            margin: 0px auto;

            .introduce-list{
                ul{
                    li{
                        width: 33.3%;
                        float: left;
                        padding:0px 5%;
                        margin-bottom: 5.2%;
                        .introduce-list-img{
                            width: 100px;
                            height: 100px;
                            margin: 0px auto 20px;
                            img{
                                display: block;
                                width: 100%;
                            }
                        }
                        .introduce-list-title{
                            color: #474D66;
                            font-size: 20px;
                            text-align: center;
                        }
                        .introduce-list-text{
                            color: #7A8899;;
                            font-size: 13px;
                            line-height: 20px;
                            margin-top:10px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }

    .platform{
        width: 100%;
        background-color: #F4F4F4;
        padding-bottom:40px;
        .platform-img{
            max-width: 1024px;
            margin: 0px 40px;
            img{
                width: 100%;
            }
        }
    }


    .platform-bottom{
        max-width: 727px;
        margin: 110px auto 0px;
        p{
            text-align: center;
            font-size: 24px;
            color: #474D66;
            margin-bottom:60px;
        }
        ul{
            li{
                float: left;
                margin: 0px 25px 70px;
            }
        }
    }

    @media only screen and(max-width:1024px){
        .f24{
            font-size: 16px;
            line-height: 24px;
        }

        .f48{
            font-size: 32px;
            line-height: 48px;
        }
        .bottom{
            .row{
                .link-column{
                    ul{
                        max-width:120px;
                        margin-top: 10px;
                    }
                }
            }
        }
    }

    @media only screen and(max-width:800px){
        .f24{
            font-size: 16px;
            line-height: 16px;
        }

        .f48{
            font-size: 26px;
            line-height: 32px;
        }
    }

    @media only screen and(max-width:635px){
        .f24{
            font-size: 12px;
            line-height: 24px;
        }

        .f48{
            font-size: 18px;
            line-height: 48px;
        }
        body{
            font-size:50%;
        }
        .top{
            min-height:300px;
            .top-container{
                .banner{
                    display: none;
                }
            }
        }
        .content{
            .introduce{
                .title{
                    font-size:18px;
                }

                .text{
                    font-size: 12px;
                    line-height: 20px;
                }
                .introduce-list{
                    ul{
                        li{
                            width: 100%;
                            float: left;
                            padding:0px 5%;
                            margin-bottom: 5.2%;
                            .introduce-list-img{
                                width: 50px;
                                height: 50px;
                                margin: 0px auto 20px;
                                img{
                                    display: block;
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
