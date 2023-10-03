const content = document.getElementById("content");
const content2 = document.getElementById("content2");

window.onload = () => {
content.style.backgroundColor = getRGB();

/*changeColor(content, 2);
changeColor(content2, 1);*/

    /*testFunction(5)*/

  /*  sum(5,6);
    sum (10,4);
    sub(5,6);
    sub (10,4);
    sum(5, 6, 7);
*/
/*console.log(sum(5,6,7));
let firstNumber = sum(5,6,7);
let secondNumber = sum(8,9,10);
console.log(firstNumber + secondNumber);
*/
}

function getColor(a,b){
    let res = a + b;
    if( res > 255){
        return 255;
}else if (res < 0) {
    return 0;
}else {
    return res;
}
}

function getRGB(){
    let r = getColor(5,60);
    let g = getColor(80,20);
    let b = getColor(155,150);
console.log(r)
console.log(g)
console.log(b)

    return `rgb(${r},${g},${b})`;
}

//element
//indexOfColor: 0-red 1-green 2-blue

/*
function changeColor(element, indexOfColor){
    element.style.backgroundColor = getColor(indexOfColor);

}
function getColor(indexOfColor) {
    if (indexOfColor == 0){
        return "red";
    }else if (indexOfColor == 1) {
        return "green"
    }else if (indexOfColor == 2) {
        return "orange"
    }

}
*/

/*function sum(a,b,c){
    return a + b + c;
}*/
/*
function testFunction(a){
    if (a==5){
        console.log("ukoncuj funkci")
        return;
    }
    console.log(a)

}*/
/*
function sum (a,b) {
    console.log(a + b);
}

function sub (a,b) {
    console.log(a - b);
}

function sum (a, b, c) {
    console.log(a + b + c);
}
*/















/*
window.onload = () => {
    //zmeni barva (pozadi) na zelenou
    //zavolame fce changeColorOfElement s argumentem content2
    changeColorOfElement(content);
    setTimeout(() => {
        changeColorOfElement(content2)
    },1000*5)

}
function changeColorOfElement(element){
    setTimeout(() => {
        element.style.backgroundColor = "red";
    },1000);
    setTimeout(() => {
        element.style.backgroundColor = "orange";
    },2000);
    setTimeout(() => {
        element.style.backgroundColor = "green";
    },3000);
}
*/



/*
window.onload = () => {
    //zmeni barva (pozadi) na zelenou
    changeColor();

}

function changeColorF() {
    setTimeout(() => {
        content.style.backgroundColor = "red";
    },1000);

}
*/