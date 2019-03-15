<template>
    <div class="nav">
        <div class="menu" @click="menuClick">
            <img src="../images/nav.png">
        </div>
        <div class="layer" v-show="mNavBlock" @click="layerShow"></div>
        <ul class="mNav" :class="{'mNavBlock' : mNavBlock}">
            <li class="listLi" v-for="(item, index) in navList" @click="navTab(item,index)">
                {{item.text}}
                <ul class="listChild">
                    <li v-for="(itemChild, indexChild) in item.navListChild">
                        <a :href="itemChild.url">{{itemChild.text}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        navList: {
            type: [Array]
        }
    },
    data(){
        return{
            isShow : null,
            mNavBlock : false
        }
    },
    computed: {
        
    },
    created(){
    },
    mounted(){
    },
    methods:{
        layerShow(){
            this.mNavBlock = false
        },
        navTab(item,index){
            if(item.text == "English"){
                this.$router.push({path: '/en'});
                return false;
            }

            if(item.text == "中文"){
                this.$router.push({path: '/'});
                return false;
            }
        },
        menuClick(){
            this.mNavBlock = this.mNavBlock ? false : true;
        }
    },
    watch:{
    },
    components:{
    }
}
</script>

<style lang="less">
    .nav{
        float: right;
        margin-right: 3.5%;
        margin-top:4px;
        .menu{
            img{
                display: block;
                width: 24px;
            }
        }
        .mNav{
            -webkit-transition:-webkit-transform 0.3s ease-in-out;
            transition:transform 0.3s ease-in-out;
            padding-top:10px; 
            position:fixed;
            top:0px;
            left: -210px;
            width: 200px;
            background:#f9f9f9;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            height: 100%;
            z-index: 9999;
            li.listLi{
                color:#7A8899;
                padding-left:22px; 
                font-size:14px;
                line-height:40px; 
                .listChild{
                    padding-left:20px; 
                    li{
                        a{
                            color:#7A8899;
                        }
                    }
                }
            }
        }
        .mNavBlock{
            -webkit-transform: translateX(210px);
            transform: translateX(210px);
        }
        .layer{
            position: fixed;
            display: block;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            background:rgba(0,0,0,0);
            z-index: 9991;
        }
    }
</style>
