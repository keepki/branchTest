<template>
  <div>
    <br>
    <hr>

    <div class="goods">
        <ul>
					<li>
						<a href="">
						<img src="./show-img/new_goods_3.jpg" alt="">
						<span>瑞米无线吸尘器F8<br />&888元<br /><br />了解更多</span>
						</a>
					</li>
					<li>
						<a href="">
						<img src="./show-img/new_goods_4.jpg" alt="">
						<span>八牌电冰箱<br />&1588元<br /><br />了解更多</span>
						</a>
					</li>
					<li>
						<a href="">
						<img src="./show-img/topic_goods_3.jpg" alt="">
						<span>正宗广煲仔饭<br />&20元<br /><br />了解更多</span>
						</a>
					</li>
					<li>
						<a href="">
						<img src="./show-img/topic_goods_2.jpg" alt="">
						<span>不知道什么牌子的手表<br />&688<br /><br />了解更多</span>
						</a>
					</li>		
					<li>
						<a href="">
						<img src="./show-img/topic_goods_1.jpg" alt="">
						<span>瑞米无线吸尘器F8<br />&888元<br /><br />了解更多</span>
						</a>
					</li>
					<li>
						<a href="">
						<img src="./show-img/new_goods_3.jpg" alt="">
						<span>八牌电冰箱<br />&1588元<br /><br />了解更多</span>
						</a>
					</li>
					<li>
						<a href="">
						<img src="./show-img/new_goods_2.jpg" alt="">
						<span>正宗广煲仔饭<br />&20元<br /><br />了解更多</span>
						</a>
					</li>
					<li>
						<a href="">
						<img src="./show-img/new_goods_3.jpg" alt="">
						<span>不知道什么牌子的手表<br />&688<br /><br />了解更多</span>
						</a>
					</li>	
		</ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.goods{
    width: 1300px;
    height: 924px;
    /* margin: 0 auto; */
}
.goods li{
    float: left; /* 父级没设置高度,子集浮动会造成浮动影响所以要清楚浮动 */
	position: relative;
	overflow: hidden;
	height: 405px;
	width: 304px;
	margin-right: 8px;
	background-color: pink;
}
.goods li:nth-child(4n){
	margin-right: 0;
}

.goods li img{
	height: 405px;
	width: 304px;
	object-fit: cover;
}

.goods li:hover img{
	transform: scale(1.2,1.2);
	transition-duration: 0.5s;
}

.goods li:hover span{
	top:280px ;
}

.goods li span{
	position: absolute;
	top:340px;
	left: 40px;
	font-size: 20px;
	font-weight: bold;
	font-stretch: normal;
	letter-spacing: 0px;
	color: white;
	transition: top 0.5s;
}
</style>