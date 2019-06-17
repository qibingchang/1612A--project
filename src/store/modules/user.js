import request from '../../utils/request';
export default {
    namespaced:true,
    state:{ //获取用户信息
        userinfo:{}
    },
    mutations:{
        setuserinfo(state,data){
            state.userinfo = data
        }
    },
    actions:{
        getUserInfo(context){
            //成功后改变UserInfo
            request.get("/api/user/info").then(res=>{
                context.commit("setuserinfo",res.data)

            })
        }
    }
}