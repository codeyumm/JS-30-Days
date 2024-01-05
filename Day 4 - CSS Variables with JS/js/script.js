// to check the js file
// alert("Hello from script.js");

// wating for dom to gets load
window.onload = function() {

    const inputs = document.querySelectorAll('.controllers input')
    const image = document.querySelector('.image')

    console.log();

    inputs.forEach( (input) => {
        input.addEventListener('change', updateValue);
        input.addEventListener('mousemove', updateValue);
    });

    function updateValue(){
        image.style.setProperty("--"+this.name, this.value + (this.dataset.sizing || ""))
        document.documentElement.style.setProperty("--"+this.name, this.value + (this.dataset.sizing || ""));
    }
}