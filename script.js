const container = document.querySelector("#container"); // Select "container" element with reference

function createGrid (squareCount) {

    const squareWidth = 100 / Math.sqrt(squareCount);

    for(i = 0; i < squareCount; i++){ // Loop 16 times to create 16 divs

    const grids = document.querySelectorAll(".grid");

    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    
    const grid = document.createElement("div"); // Create div element named grid
    // const grid_change = document.querySelector("div");
    grid.classList.add("grid"); // Add .grid css to grid 
    // grid_change.classList.add("grid_change");

    grid.style.flex = `0 0 calc(${squareWidth}% - 8px)`;
    // grid_change.style.flex = `0 0 calc(${squareWidth}% - 8px)`;

    grid.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    

    container.appendChild(grid); // Append grid to container

    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            // grid.classList.add("grid_change");

            red = Math.floor(Math.random()*256);
            green = Math.floor(Math.random()*256);
            blue = Math.floor(Math.random()*256);

            grid.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

            // grid_change.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })

        grid.addEventListener("mouseout", () => {
            // grid.classList.remove("grid_change");

            red = Math.floor(Math.random()*256);
            green = Math.floor(Math.random()*256);
            blue = Math.floor(Math.random()*256);
            grid.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    })
}
}

function removeGrid(){
    
    const grids = document.querySelectorAll(".grid");
    
    grids.forEach((grid) => {
        container.removeChild(grid);
    });
}

const button = document.querySelector("#button");

button.addEventListener("click", () => {

    removeGrid();
    
    const squareCount = parseInt(prompt("How many squares do you want on each side?"), 10);

    if(squareCount > 100 || squareCount < 0 || isNaN(squareCount)){
        alert("ERROR: Input a number between 0 and 100");
    }

    else {
        createGrid(squareCount);
    }
})
