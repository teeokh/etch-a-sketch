const container = document.querySelector("#container"); // Select "container" element with reference

for(i = 0; i < 16; i++){ // Loop 16 times to create 16 divs
    const grid = document.createElement("div"); // Create div element named grid
    grid.classList.add("grid"); // Add .grid css to grid 
    container.appendChild(grid); // Append grid to container
}