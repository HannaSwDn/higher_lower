// variables
let currentNumber;
let lastNumber;
let degrees = 2500;
let wheel = document.getElementById('wheel');

const spin = () => {
    degrees = degrees + Math.floor(Math.random() * 360);
    document.getElementById('wheel').style.transform = `rotate(${degrees}deg)`;
    degrees = degrees + 2500;
}
