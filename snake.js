// Snake
// Spielfunktion

// Variablen um auf HTML Datei zuzugreifen
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Legt die Größe der Kästchen für die Spiel-
// figur fest
let rectsize = 30 - 1;

draw();

// Optik
function draw() {
    // Hintergrund: Spielfeld
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Spielfigut/Schlange
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(100, 150, rectsize, rectsize);

    ctx.fillRect(130, 150, rectsize, rectsize);

    // Äpfel/Essen
    ctx.fillStyle = 'red';
    ctx.fillRect(290, 250, rectsize, rectsize);
}

// Spielfunktion
function gameLoop() {

}