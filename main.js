
const display = document.getElementsByClassName('display')[0];
const clear = document.getElementsByClassName('button')[0];

let gridSize

function grid() {
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            container.appendChild(square);
        }
    }
    container.style.setProperty('--elements-gridsize', gridSize)
};

grid(gridSize = 32);

$( ".square" ).on( "mouseover", function() {
    $(this).css("background-color", "black");
});


function Erase() {
    $(".square").css("background-color", "white");
}