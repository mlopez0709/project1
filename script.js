var wins = 0;
var losses = 0;
var ties = 0;
var numRounds = 0;

function playRPS() {

    for (var attempts = 0; attempts < 3; attempts++) {
        numRounds = parseInt(prompt("How many rounds do you want to play?"));

        if (!validateRoundsInput(numRounds)) {
            alert("Invalid input. Please enter a valid number of rounds (a positive integer).");
            if(attempts == 2){
                alert("Invalid input. You entered the wrong number 3 times, it is not possible to play.");
            }
        } else {
            attempts = 3;
        }
    }
    for (var round = 1; round <= numRounds; round++) {
        // Prompt the user for their choice
        const user = prompt("Round " + round + ": Enter 'r' for rock, 'p' for paper, or 's' for scissors").toLowerCase();
        const computer = Math.floor(Math.random() * 3); // 0, 1, or 2

        var result = '';
        if (user === 'r') {
            if (computer === 0) {
                result = "tie";
            } else if (computer === 1) {
                result = "loss";
            } else {
                result = "win";
            }
        } else if (user === 'p') {
            if (computer === 0) {
                result = "win";
            } else if (computer === 1) {
                result = "tie";
            } else {
                result = "loss";
            }
        } else if (user === 's') {
            if (computer === 0) {
                result = "loss";
            } else if (computer === 1) {
                result = "win";
            } else {
                result = "tie";
            }
        } else {
            alert("Invalid input. Please enter 'r', 'p', or 's'.");
            round--; 
            continue;
        }
        if (result === "win") {
            wins++;
            alert("You win!");
        } else if (result === "loss") {
            losses++;
            alert("You lose!");
        } else {
            ties++;
            alert("It's a tie!");
        }
    }

    alert(`Final Results: Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
}

function validateRoundsInput(input) {
    const rounds = parseInt(input);
    if (isNaN(rounds) || rounds <= 0) {
        return false;
    }
    return true;
}

playRPS();