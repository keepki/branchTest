<template>
  
  <transition name="fade" mode="out-in">
    <keep-alive>
      <router-view>
  </router-view>
    </keep-alive>
       
   
   
  </transition>

</template>

<script>
export default {

}
</script>

<style>

/* .fade-enter-active{
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
} */

.fade-enter{
  opacity: 0;
  transform: translate3d(0,100%,0);
}
.fade-enter-active{
  will-change: transform;
  transition: all 1s ease-out;
  

}
.fade-enter-to{
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
 
}
.fade-leave-active {
  will-change: transform;
  transition: all 1s ease-out;
 
  transform: translate3d(0, -100%, 0); /*这里离开的初始位置就在原地最后一帧不指定效果的话
  就是原地消失，所以为了连贯性我们在中间动画加上对应的滑动效果这样效果就是在设定的500ms内opacity
  慢慢归0元素慢慢移动 translate3d(100%, 0, 0)*/
}
</style>