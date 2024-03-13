const API = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const generateBtn = document.getElementById('generate');
const qrimg = document.getElementById('qrimg');
const userValue = document.querySelector('.container input');

function generateQR(){
    qrimg.src = API + userValue.value;
}