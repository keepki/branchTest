<template>
    <div class="showcontain">
    <div class="show">
    <el-carousel :interval="5000" arrow="always" height="500px" >
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
<!-- 下一个模块 -->
<div class="Goods">
<Goods></Goods>
</div>


    </div>
  
</template>

<script>
import Goods from '@/components/show/goods.vue'
export default {
  data(){
    return {

    }
  },
  components:{
    Goods
  }

}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    background-size:contain;
    
  }
  
  .el-carousel__item:nth-child(2n) {
    background-image: url('./show-img/222.jpg');
    background-size:contain;
    
  }
  
  .el-carousel__item:nth-child(2n+1) {
   background-image: url('./show-img/apex.jpeg');
   background-size:contain;
  }
  .show{
    width: 1200px;
    margin:0 auto;;
  }
 .Goods{
  display: flex;
  justify-content: center;
 }
 

</style>