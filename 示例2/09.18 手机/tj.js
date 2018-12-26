window.onload=function(){
	var mus=document.getElementsByClassName("mus");
	var audio=document.getElementById("audio");
	var swiper= new Swiper('.swiper-container',{
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
});

	for (var i = 0; i < mus.length; i++) {
		mus[i].onclick=function(){
			if (audio.paused) {
				for (var i = 0; i < mus.length; i++) {
					mus[i].src='img/soundOpen.png';
					audio.play();
				}
			}else{
				for (var i = 0; i < mus.length; i++) {
					mus[i].src='img/soundClose.png'
				}
				audio.pause();
			}

	}
	}
	
}