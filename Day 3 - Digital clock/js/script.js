// to check the js file
// alert("Hello from script.js");

// waiting for dom to gets load
window.onload = function() {

    // getting elements from dom
    const hours = document.querySelector('.hr');
    const minutes = document.querySelector('.min');
    const seconds = document.querySelector('.sec');
    const time = document.querySelector('.t');

    console.log( new Date());

    setInterval(() => {
        const date = new Date();
        
        const sec = date.getSeconds();
        const min = date.getMinutes();
        const hr = date.getHours();

        seconds.innerHTML = fixDigit(sec);
        minutes.innerHTML = fixDigit(min)  + ":";
        hours.innerHTML = fixDigit(hr)  + ":";

        // for AM or PM
        time.innerHTML = (hours <= 12) ? "AM" : "PM";
        

    }, 1000)

    // to fix single digit value
    // 1 -> 01
    function fixDigit(number){

        if(number <= 9){
            return "0" + number;
        }

        return number;
    }
}