

const mess = document.querySelector(".mess-with-me");
mess.style.fontSize = "40px";
const messpara = document.querySelector("p.mess-with-me");
messpara.style.backgroundColor = "green";


const hide = document.querySelector("#hide-me");
hide.style.display = "none";

const trike = document.querySelector("#triceratops");
trike.style.height = "324px";

const oran = document.querySelector("#mess-with-me")

const feather = document.querySelector("#feathers")

const dinoRow = document.querySelector("#row")
const button = document.querySelector("#toggle")
const bigger = document.querySelector("#biggify")

function changeBackgroundToOrange() {
    mess.style.backgroundColor = 'orange';

}

mess.addEventListener('click', changeBackgroundToOrange);


function makeBorder() {
    trike.style.border = '1px solid red';

}

trike.addEventListener('click', makeBorder);

function sneaky() {
    feather.style.opacity = '.5';

}

feather.addEventListener('click', sneaky);

function rowColor() {
    dinoRow.style.backgroundColor = 'blue';

}

button.addEventListener('click', rowColor);


function biggie() {
    bigger.style.width = "200px";

}

bigger.addEventListener('mouseover', biggie);

