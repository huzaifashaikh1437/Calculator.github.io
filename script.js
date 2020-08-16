let display = document.querySelector("#display");
let numbers = document.querySelector(".numbers").children;
let buttons = document.querySelector(".buttons").children;
for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', function(){
        display.value = display.value+numbers[i].innerHTML;
        if (numbers[i].innerHTML == 'C'){
            let allValue = display.value;
            let finalValue = allValue.slice(0, -2);
            display.value = finalValue;
        }       
        if (numbers[i].innerHTML == "CE"){
            display.value = '';
        }
        if (numbers[i].innerHTML == "="){
            let allValue = display.value;
            let finalValue = allValue.slice(0, -1);
            display.value = finalValue;
            display.value = eval(display.value);
        }
    })
}
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        display.value = display.value + buttons[i].innerHTML;
    });
}