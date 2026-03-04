console.log('Happy developing ✨')

var audio = new Audio('audio/Key.mp3')

const TK = document.getElementById('TelegraphKey');
const TT = document.getElementById('TableTxt');
const DP = document.getElementById('display');

TK.addEventListener('mousedown', function(){
	audio.play();
},false);
TK.addEventListener("touchstart",function(){
	audio.play();
},);
TK.addEventListener('mouseup', function(){
	audio.pause();
},false);
TK.addEventListener('touchend', function(){
	audio.pause();
},false);