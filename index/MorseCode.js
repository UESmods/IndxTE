const Word_list_witch = document.getElementById("word_on_off");
const Word_list = document.getElementsByClassName("word_morse")[0];
const Enter_start = document.getElementById("start_code");
const start_clean = document.getElementById("start_clean");
const print_word = document.getElementById("print_word");
const enter_word = document.getElementById("enter_word");

const morseCodeMap = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
    '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
    '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
    '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
    '$': '...-..-', '@': '.--.-.',
    ' ': ' '
};

const reverseMorseCodeMap = Object.keys(morseCodeMap).reduce((acc, key) => {
    acc[morseCodeMap[key]] = key;
    return acc;
},{});

//加密
function encryptToMorse(text) {
    return text.toUpperCase().split('').map(char => {
        if(morseCodeMap[char]) {
            return morseCodeMap[char];
        }else{
            return char;
        }
    }).join(' ');
}

//解密
function decryptFromMorse(morse) {
    const words = morse.split('   ');
    return words.map(word => {
        const characters = word.split(' ');
        return characters.map(code => {
            if(reverseMorseCodeMap[code]){
                return reverseMorseCodeMap[code];
            }else{
                return code;
            }
        }).join('');
    }).join(' ');
}

Word_list_witch.addEventListener('click', function(){
    Word_list.classList.toggle('hide');
    if(Word_list.classList.contains('hide')){
        Word_list_witch.textContent='显示介绍';
    }else{
        Word_list_witch.textContent='关闭介绍';
    }
});

start_clean.addEventListener('click', function(){
	print_word.textContent = "解密的原文或加密的密文在这里";
    print_word.style.color = '#999';
    enter_word.value = "";
});

Enter_start.addEventListener('click',function(){
    const inputText = enter_word.value.trim();
    if(inputText === ''){
        print_word.textContent = "请输入内容！";
        print_word.style.color = '#999';
        return;
    }
    if(inputText.includes('.') || inputText.includes('-')){
        const decryptedText = decryptFromMorse(inputText);
        print_word.textContent = decryptedText;
        print_word.style.color = '#000';
    }else{
        const encryptedText = encryptToMorse(inputText);
        print_word.textContent = encryptedText;
        print_word.style.color = '#000';
    }
});