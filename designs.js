var PixelCanvas = {};

PixelCanvas.getInputs = function() {
    let height = document.querySelector('#inputHeight');
    let width = document.querySelector('#inputWidth');
    const submit = document.querySelector("input[type=submit]");
     submit.addEventListener("click", function(event) {
        event.preventDefault();
        let widthValue = width.value;
        let heightValue = height.value;
        PixelCanvas.makeGrid(widthValue, heightValue);
    });
};
PixelCanvas.makeGrid = function(width, height) { 
    const grid = document.getElementById('pixelCanvas');
    grid.innerHTML = "";
    let color = document.querySelector('#colorPicker');
    let i = 0;
    while (i < height) {
        const tr = document.createElement("tr"); 
        for (let j = 0; j < width; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
        }
        grid.appendChild(tr);
        i = i+1;
    }  
    grid.addEventListener("click", function(event) {
        if (event.target.tagName === "TD") {
            let td = event.target;
            td.style.backgroundColor=color.value;
        }
    });
}; 

PixelCanvas.getInputs();