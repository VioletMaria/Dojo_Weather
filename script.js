function showAlert(){
    var alert = document.querySelector("#alert");
    var displaySettings = alert.style.visibility;

    if(displaySettings == 'hidden'){
        alert.style.visibility = 'visible';
    } else {
        alert.style.visibility = 'hidden';
    }
}

function cToF(temp){
    return Math.round(9 / 5 * temp + 32);
}

function fToC(temp){
    return Math.round(5 / 9 * (temp - 32));
} 

function farOrCel(element) {
        console.log(element.value);
        for(var i=1; i<9; i++) {
            var tempSpan = document.querySelector(".temp" + i);
            var tempVal = parseInt(tempSpan.innerText);
            if(element.value == "°C") {
                tempSpan.innerText = fToC(tempVal) + "°";
            } else {
                tempSpan.innerText = cToF(tempVal) + "°";
            }
        }
    }

// solution:

// function c2f(temp) {
//     return Math.round(9 / 5 * temp + 32);
// }

// function f2c(temp) {
//     return Math.round(5 / 9 * (temp - 32));
// }

// function convert(element) {
//     console.log(element.value);
//     for(var i=1; i<9; i++) {
//         var tempSpan = document.querySelector("#temp" + i);
//         var tempVal = parseInt(tempSpan.innerText);
//         if(element.value == "°C") {
//             tempSpan.innerText = f2c(tempVal);
//         } else {
//             tempSpan.innerText = c2f(tempVal);
//         }
//     }
// }