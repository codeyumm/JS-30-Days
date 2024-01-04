// to check the js file
// alert("Hello from script.js");

// waiting for dom to load
window.onload = function() {

    setInterval(moveSecondHand, 1000);
    
    // grabbing elements from dom
    const hourHand = document.querySelector('[data-hour-hand]');
    const minuteHand = document.querySelector('[data-minute-hand]');
    const secondHand = document.querySelector('[data-second-hand]');

    console.log(hourHand);

    var counter = 0;
    function moveSecondHand(){
        // getting real time from system
        // from Date class we get the date
        var date = new Date();
        
        // extracting currrent time from date
        const secondsRatio = date.getSeconds() / 60;
        const minuteRatio = ( secondsRatio + date.getMinutes()) / 60;
        const hoursRatio = ( minuteRatio + date.getHours()) / 12;



        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minuteRatio);
        setRotation(hourHand, hoursRatio);
    }



    function setRotation(element, rotationRatio){
        element.style.setProperty('--rotation', rotationRatio * 360)
    }
    

}