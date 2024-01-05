// to check the linking of js file
// alert("Hello from script.js"); 

// waiting for dom to get load
window.onload = function() {



    // getting elements from dom
    const btn = document.querySelector('.btn');
    const colorCode = document.querySelector('#color-code');
    const feedback = document.querySelector(".feedback-container");
    const btnCopy = document.querySelector(".icon-copy");

    // setting click listener on button
    btn.addEventListener('click', generateRandomColor);

    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    // event handler function
    function generateRandomColor(){
        
        
        var hexCode = "#";

        for(let i=0; i<6; i++){

            // from hex values array taking on value
            // with the help of math.random function
            // * 15 means random value will not go more than 14
            hexCode += hexValues[Math.round(Math.random() * 15)];
        }

        // set background color with new hex code
        document.body.style.background = hexCode;

        // display hex code
        colorCode.innerHTML = hexCode;

        // add to clipboard
    }
    
    //calling function when page gets load
    generateRandomColor()
}