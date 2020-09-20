let x = 0;
let y = 0;
let change = 90;
const cube = document.querySelector('.cube-wrap');

const arrLeft = document.querySelector('.arr-left');
const arrRight = document.querySelector('.arr-right');
const arrUp = document.querySelector('.arr-top');
const arrDown = document.querySelector('.arr-bottom');

arrLeft.addEventListener('click', () => {
    y -= change;
    console.log("x je " + x + "a y je " + y);
    document.querySelector('.cube-wrap').style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
arrRight.addEventListener('click', () => {
    y += change;
    console.log("x je " + x + "a y je " + y);
    document.querySelector('.cube-wrap').style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
arrUp.addEventListener('click', () => {
    x += change;
    console.log("x je " + x + "a y je " + y);
    document.querySelector('.cube-wrap').style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
arrDown.addEventListener('click', () => {
    x -= change;
    console.log("x je " + x + "a y je " + y);
    document.querySelector('.cube-wrap').style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});

document.getElementById("currentyear").innerText = new Date().getFullYear();


