// Event listener on the 'submit' button
document.querySelector("#sizePicker").addEventListener("submit", makeGrid);

// A function for drawing the table and paint the boxes by click
function makeGrid() {

    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    var table = document.getElementById("pixelCanvas");

    // Loop into the height and width
    for(var i = 0; i < height; i++) {
        // Drawing the rows
        var row = table.insertRow(0)
        for(var j = 0; j < width; j++) {
            // Drawing the columns
            row.insertCell(0)
        }
    }

    // Set click event listener on the color picker element
    document.querySelector("#colorPicker").addEventListener("click", function() {
        // Find all tds in the table and add click event listener on each td
        document.querySelectorAll("#pixelCanvas td").forEach(td => td.addEventListener("click", function() {
            // Set specific color on the clicked td
            td.style.backgroundColor = document.getElementById("colorPicker").value;
        }));
    });

}
