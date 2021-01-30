// Event listener on the 'submit' button
document.querySelector("#sizePicker").addEventListener("submit", makeGrid);

// A function for drawing the table and paint the boxes by click
function makeGrid() {

    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    let table = document.getElementById("pixelCanvas");

    // Remove all table's child elements before creating the grid
    table.innerHTML = '';

    // Loop into the height and width
    for(let i = 0; i < height; i++) {
        // Drawing the rows
        let row = table.insertRow(0)
        for(let j = 0; j < width; j++) {
            // Drawing the columns
            row.insertCell(0)
        }
    }

    // Find all tds in the table and add click event listener on each td
    document.querySelectorAll("#pixelCanvas td").forEach(td => td.addEventListener("click", function() {
        // Set specific color on the clicked td
        td.style.backgroundColor = document.getElementById("colorPicker").value;
    }));
}
