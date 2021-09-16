<template>
<div>

  <div>index页面</div>
  <el-button @click="go">go</el-button>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        go(){
            this.$router.push('/desk/notice')
        }
    },
    created(){
              
    }
}
</script>

<style>

</style>