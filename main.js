var win_score = 0;
var draw_score = 0
var lose_score = 0;

var random_number = 0;
var comp_symbol = "paper";
var user_symbol = "paper";

function get_random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function comp_random_symbol() {
    random_number = get_random_int(0, 2);
    if (random_number == 0) comp_symbol = "rock";
    else if (random_number == 1) comp_symbol = "paper"
    else if (random_number == 2) comp_symbol = "scissors";
}

function user_win() {
    win_score++;
    document.getElementById("win").innerHTML = "Win: " + win_score;
    document.getElementById("symbols").innerHTML = "<div id='" + user_symbol + "' class='win'></div><div id='vs'>VS.</div><div id='" + comp_symbol + "' class='lose'></div>";
}

function user_draw() {
    draw_score++;
    document.getElementById("draw").innerHTML = "Draw: " + draw_score;
    document.getElementById("symbols").innerHTML = "<div id='" + user_symbol + "' class='draw'></div><div id='vs'>VS.</div><div id='" + comp_symbol + "' class='draw'></div>";
}

function user_lose() {
    lose_score++;
    document.getElementById("lose").innerHTML = "Lose: " + lose_score;
    document.getElementById("symbols").innerHTML = "<div id='" + user_symbol + "' class='lose'></div><div id='vs'>VS.</div><div id='" + comp_symbol + "' class='win'></div>";
}

function check(symbol) {
    comp_random_symbol();
    user_symbol = symbol;
    console.log("comp: " + comp_symbol);
    console.log("user: " + user_symbol);
    if (symbol == "rock") {
        if (comp_symbol == "rock") user_draw();
        else if (comp_symbol == "paper") user_lose();
        else if (comp_symbol == "scissors") user_win();
    } else if (symbol == "paper") {
        if (comp_symbol == "rock") user_win();
        else if (comp_symbol == "paper") user_draw();
        else if (comp_symbol == "scissors") user_lose();
    } else if (symbol == "scissors") {
        if (comp_symbol == "rock") user_lose();
        else if (comp_symbol == "paper") user_win();
        else if (comp_symbol == "scissors") user_draw();
    }
}

function new_game() {
    win_score = 0;
    lose_score = 0;
    draw_score = 0;
    document.getElementById("win").innerHTML = "Win: " + win_score;
    document.getElementById("draw").innerHTML = "Draw: " + draw_score;
    document.getElementById("lose").innerHTML = "Lose: " + lose_score;
    reset();
}

//nigdy
function reset() {
    document.getElementById("symbols").innerHTML = "<div id=" + "rock" + " class=" + "choice" + " onclick=" + "check('rock')" + "></div>" + "<div id=" + "paper" + " class=" + "choice" + " onclick=" + "check('paper')" + "></div>" + "<div id=" + "scissors" + " class=" + "choice" + " onclick=" + "check('scissors')" + "></div>";
}