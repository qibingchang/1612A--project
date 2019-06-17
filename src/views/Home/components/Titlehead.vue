<template>
    <div class="header">
        <p v-if="back">
        <span class="iconfont icon-xiangzuo"></span>
        </p>
        <b>{{titletext}}</b>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        back:{
            default:true,
            type:Boolean
        },
        title:{
            default:"",
            type:String
        }
    },
    computed:{
        titletext(){
            return this.title?this.title:this.$route.meta.title
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../../static/scss/common.scss';
.header{
    width: 100%;
    font-size: rem(16px);
    height: rem(50px);
    line-height: rem(50px);
    display: flex;
    justify-content: space-between;
    b{
        font-weight: bolder;
    }
    div{
        span{
            margin: 0 rem(10px);
        }
    }
}
</style>
