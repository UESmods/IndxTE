console.log('Happy developing ✨')

var audio = new Audio('audio/Key.mp3')

const TK = document.getElementById('TelegraphKey');
const TT = document.getElementById('TableTxt');
const DP = document.getElementById('display');

var Ptext = document.createElement("p");

const CwCode = [];

function DTif(Data) {
	if(Data <= 150){
		return '·';
	}else{
		return '—'
	}
};
//屏幕显示函数
function showData(Data1){
	var meme = DTif(Data1);
	DP.textContent = meme;
	return meme;
};
//好看函数
function DisplayCodeBudiy(Text){
	var wordtext ="";
	for(var i=0;i<CwCode.length;i++){
		wordtext += ' '+CwCode[i];
	}
	return wordtext;
};
//每个能组成cw字母的截断函数
function DisplayCode(TimeData){
	let IfTime = Date.now() - TimeData;
	if(IfTime > 200){
		TT.appendChild(Ptext);
		const textNode = document.createTextNode(","+DisplayCodeBudiy(CwCode));
		Ptext.appendChild(textNode);
		CwCode.splice(0,CwCode.length);
	}
};

let pressStartTime = 0;
let pressDuration = 0;
let EnterCode = 0;
let isPressed = false;

let TS1 = 0;
let TS2 = 0;

//鼠标与Android触屏激发函数
TK.addEventListener('mousedown', function(){
	pressStartTime = Date.now();
	// TS2 = Date.now();
	audio.play();
	DP.textContent = ' ';
	DisplayCode(EnterCode);
	// console.log(TS2-TS1);
},false);
TK.addEventListener("touchstart",function(){
	pressStartTime = Date.now();
	audio.play();
	DP.textContent = ' ';
	DisplayCode(EnterCode);
},false);

//鼠标与Android触屏释放函数
TK.addEventListener('mouseup', function(){
	pressDuration = Date.now() - pressStartTime;
	// TS1 = Date.now();
	EnterCode = Date.now();
	audio.pause();
	CwCode.push(showData(pressDuration));
},false);
TK.addEventListener('touchend', function(){
	e.preventDefault();
	if (!isPressed) return;
    isPressed = false;
	pressDuration = Date.now() - pressStartTime;
	EnterCode = Date.now();
	audio.pause();
	CwCode.push(showData(pressDuration));
},false);

//空格激发函数
document.addEventListener('keydown', function(event) {
	if(event.code === 'Space' || event.key === ' ') {
		pressStartTime = Date.now();
		audio.play();
		DisplayCode(EnterCode);
		TK.style.background = '#333';
		TK.style.color = '#fff';
		DP.textContent = ' ';
	}
});
document.addEventListener('keyup', function(event) {
	if(event.code === 'Space' || event.key === ' ') {
		pressDuration = Date.now() - pressStartTime;
		EnterCode = Date.now();
		console.log(pressDuration);
		audio.pause();
		TK.style.background = '#fff';
		TK.style.color = '#000';
		CwCode.push(showData(pressDuration));
	}
});

