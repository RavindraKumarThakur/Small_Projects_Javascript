let text = document.querySelector('.container textarea'); 
let voices = []
let speech = new SpeechSynthesisUtterance();
let selectVoice = document.querySelector('.select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,i) => (selectVoice.options[i] = new Option(voice.name,i)))
};

selectVoice.addEventListener('change',() => (speech.voice = voices[selectVoice.value]))

document.getElementById('listen').addEventListener('click',() => {
    speech.text = text.value;
    window.speechSynthesis.speak(speech)
})