console.log("Script js Initializing");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

let boxes = document.querySelector(".container").children;
console.log(boxes);

function getRandomColor(){
    let val1 = Math.floor(Math.random() * 256);
    let val2 = Math.floor(Math.random() * 256);
    let val3 = Math.floor(Math.random() * 256);

    return `rgb(${val1} , ${val2} ,${val3})`;
}

Array.from(boxes).forEach(e => {
    e.style.color = getRandomColor();
    e.style.backgroundColor = getRandomColor();
});