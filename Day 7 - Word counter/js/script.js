// to check the js file
// alert("Hello from script.js"); 

// getting elements from dom
const inputText = document.querySelector('#textInput');
const totalChars = document.querySelector('#totalChars');
const totalWords = document.querySelector('#totalWords');
const totalCharsWithSpace = document.querySelector('#totalCharsWithSpace');

// event listner
inputText.addEventListener('input', handleInput)
document.addEventListener('keyup', (e) => {
    const key = e.key;
    if (key === "Backspace" || key === "Delete") {
        if(inputText.value.length === 0){
            totalWords.innerHTML = 0;
        }

    }

})



var words = 0;
// event handler
function handleInput(){

    var text = inputText.value;

    // count words and display it
    if(text.split(' ').length === 1){
        words = 1;
    } else {
        words = text.split(' ').length - 1;
    } 

    totalWords.innerHTML = words;

    // count chars withoutspace and display it
    totalChars.innerHTML = text.split(' ').join('').length;
    
    // count chars and display it
    totalCharsWithSpace.innerHTML = text.length;

}