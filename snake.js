// Snake
// Spielfunktion

// Variablen: -----------------------------------
// Variablen um auf HTML Datei zuzugreifen
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Legt die Größe der Kästchen für die Spiel-
// figur fest
let rectsize = 30 - 1;

// Variablem für den Spiellauf
let rows = 24;
let cols = 14;

// Koordinaten Schlange + Essen
let snake;
let food;

// Zellengröße
let cellWidth = canvas.width/cols;
let cellHeight = canvas.height/rows;

// Richtung, in die die Schlange zeigt
let direction = 'LEFT';
// ----------------------------------------------

// Führt "draw()" aus
draw();

// Optik
function draw() {
    // Hintergrund: Spielfeld
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Spielfigut/Schlange
    ctx.fillStyle = 'lightgreen';
    add(100, 150);
    add(130, 150);
    add(160, 150);
    add(190, 150);
    add(190, 180);
    add(190, 210);
    add(220, 210);

    // Äpfel/Essen
    ctx.fillStyle = 'red';
    add(290, 250);
}

// Legt das Kästchen fest
function add(x, y){
    ctx.fillRect(x, y, rectsize, rectsize);
}

// Spielfunktion
function gameLoop() {

}