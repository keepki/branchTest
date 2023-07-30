<template>
    <div class="fat">
      <i class="el-icon-setting" style="width: 100px;
      height: 100px;font-size: 60px;margin:20px 650px;caret-color: transparent;"></i>
      <div class="form">
        <h2>Enter Your Password</h2>
       <span>账户：</span><br><el-input type="text" autocomplete="off" suffix-icon="el-icon-user" placeholder="username" v-model="username"></el-input>
      <br>
    
      <span>密码：</span><el-input type="password" autocomplete="off" show-password placeholder="Password" v-model="password"></el-input>
      <br>
      <div class="bt">
        <!-- <button @click="submit" class="btn btn-default">login</button> -->
        <!-- <button @click="register" class="btn btn-default btnright">register</button> -->
        <el-button @click="submit" type="info" style="width: 400px;
        height: 50px;">login</el-button>
        <br>
        <br>

        <span>Don't have an account? <a @click="register" style="cursor: pointer;">Sign up</a></span>
      </div>
      </div>
    </div>
    
  </template>
  
  <script>
  import axios from 'axios';
  import '../bootstrap-3.4.1-dist/css/bootstrap.min.css'
  export default {
    data(){
      return {
        username:'',
        password:'',
        ob:{}
      }
    },
  

    methods:{
      submit(){
        const Data={
          name:this.username,
          password:this.password
        }
        
        axios.post('http://127.0.0.1:8080/api/login',{
          name:this.username,
          password:this.password
        }).then((res) => {
          const { data: responseData } = res;
          console.log(responseData);
          if(responseData.status == 250) {
            this.openVn(responseData.message+'即将跳转')
            const timerId = setTimeout(() => {              
                    this.$router.push('/main')
                    clearInterval(timerId);
                  }, 3000);
            
          }
          else{
            this.openVn(responseData.message)
          }
        })
      },
      register(){
        this.$router.push('/register')
      },
      openVn(msg) {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, msg),
            h('i', { style: 'color: teal' }, )
          ])
        });
      }
    
    }
  }
  </script>
  
  <style scoped>
  .form{
    /* background-color: pink; */
    margin: 0 auto;
    margin-top: 100px;
    width: 400px;
    height: 400px;
 
  }
  .form /deep/ input {/*因为那个啥element-ul是组件化你想要在调用这个组件的时候改一下这个组件的样式就必须用/deep/ 了
  不然更改不到子组件的样式，还有记得设置一下scoped不然别的地方也改了就混乱了  
  */
    height: 50px;
  }
 
  .el-input {
    padding-top: 10px;
    padding-bottom: 10px;
    
}

  .fat{
    position: relative;
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
  span {
    caret-color: transparent;
    -webkit-user-select: none; /* Safari/Chrome */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none; /* Standard syntax */
  }
  .bt button{
    font-size: 20px;
  }
  .bt span{
    margin-left: 70px;
  }
 
  </style>