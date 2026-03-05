console.log('Happy developing ✨')

var audio = new Audio('audio/Key.mp3')

const TK = document.getElementById('TelegraphKey');
const TT = document.getElementById('TableTxt');
const DP = document.getElementById('display');

function DTif(Data) {
	if(Data <= 150){
		return '·';
	}else{
		return '—'
	}
};
function showData(Data1){
	var meme = DTif(Data1);
	DP.textContent = meme;
};

let pressStartTime = 0;
let pressDuration = 0;
let isPressed = false;

TK.addEventListener('mousedown', function(){
	pressStartTime = Date.now();
	audio.play();
	DP.textContent = ' ';
},false);
TK.addEventListener("touchstart",function(){
	pressStartTime = Date.now();
	audio.play();
	DP.textContent = ' ';
},false);


TK.addEventListener('mouseup', function(){
	pressDuration = Date.now() - pressStartTime;
	audio.pause();
	showData(pressDuration);
},false);
TK.addEventListener('touchend', function(){
	e.preventDefault();
	if (!isPressed) return;
    isPressed = false;
	pressDuration = Date.now() - pressStartTime;
	audio.pause();
	showData(pressDuration);
},false);

document.addEventListener('keydown', function(event) {
	if(event.code === 'Space' || event.key === ' ') {
		pressStartTime = Date.now();
		audio.play();
		TK.style.background = '#333';
		TK.style.color = '#fff';
		DP.textContent = ' ';
	}
});
document.addEventListener('keyup', function(event) {
	if(event.code === 'Space' || event.key === ' ') {
		pressDuration = Date.now() - pressStartTime;
		console.log(pressDuration);
		audio.pause();
		TK.style.background = '#fff';
		TK.style.color = '#000';
		showData(pressDuration);
	}
});

