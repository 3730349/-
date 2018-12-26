window.onload=function(){
  var play=document.getElementById("play");
  var audio=document.getElementById("audio");
  var num=document.getElementById("num");
  var loading=document.getElementById("loading");

  // 1

  var i=0;
  var load=setInterval(function(){
    num.innerHTML=i+++"%";
    if (i==101) {
    clearInterval(load);
    loading.style.display="none";
      var swiper=new Swiper('.swiper-container',{
    direction:'vertical',
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 

    },

  });
    
    }
  },1);

  
    // audio.play();

  play.onclick=function(){
    if (audio.paused) {
      audio.play();
      play.src='images/music-play.png';
    }else{
      audio.pause();
      play.src='images/music-stop.png';
    }
  }
}
