<template>
    <div class="nav">
        <ul class="clearfix list">
            <li class="listLi" v-for="(item, index) in navList" @mouseenter="enter(item,index)" @mouseleave="leave()" v-if="index+1 != navList.length">
                {{item.text}}<img src="../images/arrow.png">
                <ul class="listChild" v-bind:class="{'active':isShow == index}">
                    <li v-for="(itemChild, indexChild) in item.navListChild">
                        <a :href="itemChild.url">{{itemChild.text}}</a>
                    </li>
                </ul>
            </li>
            <li class="listLi" @click="checkLan(navList[2])">
                {{navList[2].text}}
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
        enter(item,index){
            this.isShow = index;
        },
        leave(){
            this.isShow = null;
        },
        checkLan(item){
            if(item.text == "English"){
                this.$router.push({path: '/en'});
                return false;
            }

            if(item.text == "中文"){
                this.$router.push({path: '/'});
                return false;
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
    .nav{
        float: right;
        margin-right: 3.5%;
        margin-top:4px;
        ul.list{
            li.listLi{
                float: left;
                color: #fff;
                margin-left:80px;
                cursor: pointer;
                position: relative;
                height: 30px;
                line-height:30px;
                img{
                    position: relative;
                    margin-left:8px;
                    top:-2px;
                    width:8px;
                }
                a{
                    color: #fff;
                    cursor: pointer;
                }
                ul.listChild{
                    position: absolute;
                    top:30px;
                    left:-14px;
                    display: none;
                    background:#fff;
                    border-radius:2px;
                    z-index: 9999;
                    li{
                        width: 124px;
                        height: 42px;
                        line-height:42px;
                        font-size:14px; 
                        text-align:left;
                        padding-left:16px; 
                        a{
                            color:#7A8899;
                            display:block;
                            width: 100%;
                            height: 100%;
                        }
                        a:hover{
                            color:#1D6EF0;
                        }
                    }
                }
                ul.active{
                    display: block;
                }
            }
        }
    }
    @media only screen and(max-width:600px){
        .nav{
            ul.list{
                display: none;
                li.listLi{
                    margin-left:20px;
                }   
            }
            .menu{
                display:block;
            }
        }
    }
</style>
