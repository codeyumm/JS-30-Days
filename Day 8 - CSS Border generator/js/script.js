// to check the js file

// alert("Hello from script.js");

// getting elements from dom
const inBorderWidth = document.querySelector("#borderWidth").value;
const inBorderType = document.querySelector("#borderType").value;
const inBorderColor = document.querySelector("#borderColor").value;
const allInput = document.querySelectorAll(".userInput");
const result = document.querySelector("#result");
const genratedBorder = document.querySelector(".genrated-border p");
const btnCopy = document.querySelector(".icon-copy");
const feedback = document.querySelector(".feedback-container");

// set event listner
// setting on change 
allInput.forEach( (input) => {

    // on input listen for every changes in the value
    input.addEventListener('input', updateBorder);
})

btnCopy.addEventListener('click', copyColorCode);



// event handler
function updateBorder(){
    result.style.setProperty("--" + this.name, this.value + (this.dataset.sizing || ''));

    let computedStyle = window.getComputedStyle(result);

    var type = computedStyle.borderStyle;
    var width = computedStyle.borderWidth;
    var color = computedStyle.borderColor;

    var hexColor = getHexFromRgb(color);

    var border = `border: ${width} ${type} ${hexColor};`;

    genratedBorder.innerHTML = border;
}

let computedStyle = window.getComputedStyle(result);



function getHexFromRgb(color){
    var rgb = [];
    var hexCode = "#";

    var colorHex = color.split(' ');

    colorHex.forEach( (hex) => {
        rgb.push( parseInt( hex.match(/\d/g).join('') ) )
    }) 

    rgb.forEach( (digit) => {
       hexCode += parseInt(digit).toString(16);
    });

    

    return hexCode;
}

// to copy to clipboard
function copyColorCode(){
    let color = genratedBorder.innerHTML;
    navigator.clipboard.writeText(color);
    displayFeedback();
}

function displayFeedback(){
    feedback.style.display = "block";
    setTimeout(() => {
        feedback.style.display = "none";
    }, 1000)
}
    