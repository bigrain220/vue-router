<template>
  <div>
    <div>login页面</div>
    <el-button @click="loginClick">点击登录</el-button>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        loginClick(){
          this.$store.dispatch('GetMenu').then(menu=>{
            this.$router.$avueRouter.formatRoutes(menu, true);
            this.$router.push('/wel/index')
          })
        }
    },
    mounted(){

    }
}
</script>

<style>
</style>