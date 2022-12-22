// Snake
// Spielfunktion

// Variablen: -----------------------------------
// Variablen um auf HTML Datei zuzugreifen
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Variablem für den Spiellauf
let rows = 14;
let cols = 24;

// Koordinaten Schlange + Essen
let snake = [
    { x: 2, y: 3 }
];

let food;

// Zellengröße
let cellWidth = canvas.width / cols;
let cellHeight = canvas.height / rows;

// Richtung, in die die Schlange zeigt
let direction = 'RIGHT';

// Prüft, ob Essen eingesammelt wurde
let foodCollected = false;

// ----------------------------------------------
// Platziert das Essen zufällig am Feld
placeFood();

// Legt fest, in welchen Abständen eine Funktion
// aufgerufen wird (100ms)
setInterval(gameLoop, 250);

document.addEventListener('keydown', keyDown);

// Führt "draw()" aus
draw();

// Optik ----------------------------------------
function draw() {
    // Hintergrund: Spielfeld
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Spielfigut/Schlange
    ctx.fillStyle = 'lightgreen';

    snake.forEach(part => add(part.x, part.y));


    // Äpfel/Essen
    ctx.fillStyle = 'red';
    add(food.x, food.y);

    requestAnimationFrame(draw);
}

// Legt das Kästchen fest
function add(x, y) {
    // var.fillRect(x, y, breite, höhe)
    ctx.fillRect(x * cellWidth, y * cellWidth, cellWidth - 1, cellHeight - 1);
}
// ----------------------------------------------

function shiftSnake() {
    for (let i = snake.length - 1; i < snake.length; i++) {
        const part = snake[i];
        
    }
}

// Spielfunktion --------------------------------
function gameLoop() {
    shiftSnake();

    if (foodCollected) {
        snake = [
            {
                x: snake[0].x,
                y: snake[0].y
            },
            // Das restliche Array wird mit 
            // ...'name Array' hinzugefügt
            ...snake
        ];

        foodCollected = false;
    }

    switch (direction) {
        case 'LEFT':
            snake[0].x--;
            break;
        case 'RIGHT':
            snake[0].x++;
            break;
        case 'UP':
            snake[0].y--;
            break;
        case 'DOWN':
            snake[0].y++;
            break;
    }

    if (snake[0].x == food.x &&
        snake[0].y == food.y) {
        // Essen einsammeln
        foodCollected = true;

        // Essen neu Platzieren
        placeFood();
    }
}

// Funktion ja nach Knopfdruck (Richtungswechsel)
// keyCode ist wichtig für Tastendruck
function keyDown(e) {
    switch (e.keyCode) {
        case 37:
            direction = 'LEFT';
            break;
        case 39:
            direction = 'RIGHT';
            break;
        case 38:
            direction = 'UP';
            break;
        case 40:
            direction = 'DOWN';
            break;
    }
}

function placeFood() {
    // Math.floor rundet Kommazahlen ab (auch bei ,5+)
    let randomX = Math.floor(Math.random() * cols);
    let randomY = Math.floor(Math.random() * rows);

    food = { x: randomX, y: randomY }
}
// ----------------------------------------------