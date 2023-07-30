<template>
  <div class="main">
    <div class="banner">
        <h3>SELSECE YOUR CHOICE</h3>
        <li>
            <router-link to="/login">退出</router-link>
        </li>
        
    </div>
    <div class="content">
        <div class="choice">
            <ul>
                <li><router-link to="/main/zhuye">主页</router-link></li>
                <li><router-link to="">用户管理</router-link></li>
                <li><router-link to="">商品管理</router-link></li>
                <li><router-link to="">订单管理</router-link></li>
                <li><router-link to="">系统设置</router-link></li>
            </ul>
        </div>
        <div class="show">
            <transition name="fade" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
                 
            </transition>
           
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.banner {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid black;
    background-color: pink;
    display: flex;
    justify-content: center;
}
.content {
    width: 100%;
}
.choice{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
   
}
.content ul li{
    float: left;
    width: 100px;
    height: 50px;
  
    margin-right: 20px;
    padding-top: 15px;
    list-style: none;
    text-align: center;
}

/*动画 */
.fade-enter-active{
  transition: opacity 0.5s ease;

}
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter{
  opacity: 0;

}
.fade-leave-to {
  opacity: 0;
}
</style>