<template>
    <div>
     {{userinfo}}
    </div>
</template>
<script>
import request from "../../utils/request";
import {mapState,mapActions} from 'vuex';
export default {

    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState('user',["userinfo"])
    },
    methods:{
        ...mapActions('user',["getUserInfo"])
    },
    created(){
        // this.$store.dispatch('user/getUserInfo')
        this.getUserInfo()
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>