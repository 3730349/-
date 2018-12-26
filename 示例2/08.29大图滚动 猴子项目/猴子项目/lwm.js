
function I(id){
	var _id=document.getElementById(id);
	return _id;
}

function m(min,max){
	max++;
	var b=Math.floor(Math.random()*(max-min))+min;
	return b;
}

function r(){
	var a1=m(-10,255);
	var a2=m(-10,255);
	var a3=m(-10,255);
	// var a4=m(-10,255);
	var a=rgb(a1,a2,a3);
	return a;
}