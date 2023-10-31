document.addEventListener("DOMContentLoaded", function () {
    let rounds = 0;
    let player1Wins = 0;
    let player2Wins = 0;
    let player3Wins = 0;

    document.getElementById("playButton").addEventListener("click", function() {
        if (rounds > 5) {
            document.getElementById("resultText").textContent = "Juego terminado. Reinicia la página para jugar de nuevo.";
            return;
        }

        const player1 = parseInt(document.getElementById("player1Select").value);
        const player2 = parseInt(document.getElementById("player2Select").value);
        const player3 = parseInt(document.getElementById("player3Select").value);

        if (player1 === 0 || player2 === 0 || player3 === 0) {
            document.getElementById("resultText").textContent = "Seleccionen 1 o 2 dedos para jugar.";
            return;
        }

        document.getElementById("player1Hand").src = `hand-${player1}.png`;
        document.getElementById("player2Hand").src = `hand-${player2}.png`;
        document.getElementById("player3Hand").src = `hand-${player3}.png`;

        let winner;
        if (player1 !== player2 && player1 !== player3) {
            winner = "Jugador 1";
            player1Wins++;
        } else if (player2 !== player1 && player2 !== player3) {
            winner = "Jugador 2";
            player2Wins++;
        } else if (player3 !== player1 && player3 !== player2) {
            winner = "Jugador 3";
            player3Wins++;
        } else {
            winner = "Empate";
        }

        document.getElementById("resultText").textContent = `El ganador de la ronda ${rounds} es: ${winner}`;

        rounds++;
        document.getElementById("round").textContent = rounds;
        document.getElementById("player1Wins").textContent = player1Wins;
        document.getElementById("player2Wins").textContent = player2Wins;
        document.getElementById("player3Wins").textContent = player3Wins;
    });
});
