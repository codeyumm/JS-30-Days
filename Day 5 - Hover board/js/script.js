// to check the js file
// alert("Hello from script.js"); 

// waiting for dom to gets load
window.onload = function() {

    // array for random colors
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71','#f2e335', '#ef4a92'];

    // grabbing elements from dom
    const grid = document.querySelector('.grid-container');
    
    const numberOfSquare = 437;

    // to fill grid-container with small square
    for(let i=0; i<numberOfSquare; i++){
        grid.appendChild(createGrid());
    }


    // to create small grid
    function createGrid(){

        // creating element
        const smallGrid = document.createElement('div');
        smallGrid.classList.add('grid');

        smallGrid.addEventListener('mouseover', () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            smallGrid.style.backgroundColor = randomColor;
        });

        smallGrid.addEventListener('mouseout', () => {
            setTimeout( () => {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
            smallGrid.style.backgroundColor = "black";
            }, 800)
        });

        // get random color from array of colors
        
       
        return smallGrid;
    }

}