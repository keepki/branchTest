<template>
  <div class="content">
    <div class="title">
        <h3>用户注册</h3>
    </div>
    <div class="cons">
        <span> sign up with credenttials</span>
    <el-input

    placeholder="邮箱"
    prefix-icon="el-icon-s-promotion"
    v-model="mail"
    >
  </el-input>
  <el-input
    placeholder="帐号"
    prefix-icon="el-icon-user"
    v-model="user"
   ></el-input>
   <el-input
    placeholder="密码"
    prefix-icon="el-icon-sunny"
    v-model="password"
    show-password>
  </el-input>
  <br>
  <el-button @click="register" type="success">注册</el-button>
  <el-button @click="login" type="success">登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            user:'',
            mail:'',
            password:''
        }
    },

    methods:{
        login(){
            this.$router.push('/login')
        },
        register(){
            axios.post('http://127.0.0.1:8080/api/register',{
                name:this.user,
                password:this.password
            }).then((res)=>{
             const { data: responseData } = res;
             if(responseData.status===201){
                this.success()
                // this.$router.push('/login')  
                this.user=''
                this.password=''           
                const timerId = setTimeout(() => {
                    this.$router.push('/login');                
                    clearInterval(timerId);
                  }, 2000);
             }
             else{
                this.faile()
                alert(responseData.message)
             }
            })  
           
        },
        success() {
        this.$message('注册成功,正在跳转登录');
      },
      faile(){
        this.$message('注册失败');
      }
    }

}
</script>

<style scoped>
*{
    padding: 0;
    border: 0;
}
.content {
    margin: 0 auto;
    width: 460px;
    height: 660px;
   
}
.title{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid papayawhip;
}
.cons{
    width: 100%;
    height: 560px;
    padding-top: 70px;
    padding-left: 50px;
    
}
.cons span{
    font-size: 25px;
}
.cons input{
    width: 360px;

}
.el-input{
    padding-top: 20px;
    padding-bottom: 20px;
}
/* .el-input--prefix{
    padding-top: 20px;
    
} */
/deep/ el-input i {
    right: 55px;
}
</style>