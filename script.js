const container = document.querySelector("#container"); // Select "container" element with reference

function createGrid (squareCount) {

    for(i = 0; i < squareCount; i++){ // Loop 16 times to create 16 divs
    const grid = document.createElement("div"); // Create div element named grid
    grid.classList.add("grid"); // Add .grid css to grid 
    container.appendChild(grid); // Append grid to container

    const grids = document.querySelectorAll(".grid");
    
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.classList.add("grid-change");
        })

        grid.addEventListener("mouseout", () => {
            grid.classList.remove("grid-change")
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
