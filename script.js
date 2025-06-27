var screen = document.querySelector(".screen");
var clearBtn = document.querySelector(".clear-btn");
var equalBtn = document.querySelector(".equal-btn");

var calcBtns = document.querySelectorAll(".calc-btns");

calcBtns.forEach((btn)=>{
    btn.addEventListener("click" , ()=>{
        screen.value += btn.value;
    })
})

equalBtn.addEventListener("click" , ()=>{
    var userInput = screen.value;
    screen.value = eval(userInput);
})

clearBtn.addEventListener("click" , ()=>{
    screen.value = "";
})

