window.onload=function(){
	var face=document.getElementsByClassName("face");
	var imgs=document.getElementsByTagName("img");
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].onclick=function(){
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].className=" ";
		}
			this.className="newFace";
		}
		
		
	}

	var userName=document.getElementsByClassName("userName")[0];
	
	var conBox=document.getElementsByClassName("conBox")[0];
	var num=document.getElementById("num");
	var ul=document.getElementById("ul");
	var lis=ul.getElementsByTagName("li");
	var bt=document.getElementById("bt");
	bt.onclick=send;


	function send(){

		if (userName.value=="") {
			alert("用户名不能为空");
		}else if (userName.value.length<2) {
			alert("不能小于2位数");
		}else if(conBox.value==""){
			alert("内容不能为空");
		}else if (sendB==false) {
			alert("内容字数超出限制");
		}else{
			var li=document.createElement("li");
			var newFace=document.getElementsByClassName("newFace")[0];
			var src=newFace.src;
			var date=new Date();

			li.innerHTML=
						'<div class="userPic">'+
							'<img src="'+src+'">'+
						'</div>'+
						'<div class="content">'+
							'<div class="usName">'+'<a href="javascript:;">'+userName.value+' </a>:'+'</div>'+
							'<div class="msgInfo">'+conBox.value+'</div>'+
							'<div class="time">'+parseInt(date.getMonth()+1)+'月'+date.getDate()+'日 '+date.getHours()+
							':'+date.getMinutes()+'</div>'+
						'</div>';

			if(lis.length>0){

				ul.insertBefore(li,lis[0]);
		}
		else{
			ul.appendChild(li);
			}
		}
	}

	var sendB=false;
	conBox.onkeyup=limit;
	var conTxt=document.getElementsByClassName("conTxt")[0];

	var max=100;
	function limit(){
		num.innerHTML=Math.abs(conBox.value.length-max);
		if (conBox.value.length>max) {
			conTxt.innerHTML="已超出";
			snedB=false;
			num.style.color="red";
		}else{
			conTxt.innerHTML="还能输入";
			num.style.color="";
			sendB=true;
		}

	}

	// var del=document.getElementsByClassName("del")[0];
	function liHover(){
		for (var i = 0; i < lis.length; i++) {
			lis[i].onmouseover=function(){
				var del=this.getElementsByClassName("del")[0];
				// var d=this.getElementById("d");
				del.style.display="inline";
			}
			lis[i].onmouseout=function(){
				var del=this.getElementsByClassName("del")[0];
				del.style.display="none";
			}
		}
		
	}
	liHover();
	function deleteli(){
		var dels=ul.getElementsByClassName("del");
		for (var i = 0; i < dels.length; i++) {
				dels[i].onclick=function(){
					var li=this.parentNode.parentNode.parentNode;
					ul.removeChild(li);

		}
			}

		
	}
	deleteli();
}