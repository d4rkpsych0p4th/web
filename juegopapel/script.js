        const choices = ["piedra", "papel", "tijera"];
        let player1Score = 0;
        let player2Score = 0;

        const player1Img = document.getElementById("player1Img");
        const player2Img = document.getElementById("player2Img");
        const player1ScoreElem = document.getElementById("player1Score");
        const player2ScoreElem = document.getElementById("player2Score");

        const startBtn = document.getElementById("startBtn");
        const finishBtn = document.getElementById("finishBtn");

        startBtn.addEventListener("click", startGame);
        finishBtn.addEventListener("click", finishGame);

        function startGame() {
            const numPlayers = parseInt(document.getElementById("players").value);

            let choice1, choice2;

            if (numPlayers === 0) {
                choice1 = choices[Math.floor(Math.random() * 3)];
                choice2 = choices[Math.floor(Math.random() * 3)];
            } else if (numPlayers === 1) {
                choice1 = choices[Math.floor(Math.random() * 3)];
                choice2 = prompt("Ingrese su elección (piedra, papel o tijera):").toLowerCase();
            } else if (numPlayers === 2) {
                choice1 = prompt("Jugador 1, ingrese su elección (piedra, papel o tijera):").toLowerCase();
                choice2 = prompt("Jugador 2, ingrese su elección (piedra, papel o tijera):").toLowerCase();
            }

            player1Img.src = choice1 + ".jpg";
            player2Img.src = choice2 + ".jpg";

            const result = getResult(choice1, choice2);
            updateScore(result);
        }

        function getResult(choice1, choice2) {
            if (choice1 === choice2) {
                return "Empate";
            } else if (
                (choice1 === "piedra" && choice2 === "tijera") ||
                (choice1 === "tijera" && choice2 === "papel") ||
                (choice1 === "papel" && choice2 === "piedra")
            ) {
                return "Jugador 1";
            } else {
                return "Jugador 2";
            }
        }

        function updateScore(result) {
            if (result === "Jugador 1") {
                player1Score++;
            } else if (result === "Jugador 2") {
                player2Score++;
            }

            player1ScoreElem.textContent = player1Score;
            player2ScoreElem.textContent = player2Score;

            const winnerElem = document.createElement("div");
            winnerElem.className = "winner";
            winnerElem.textContent = result === "Empate" ? "Empate" : result + " gana!";
            document.body.appendChild(winnerElem);

            setTimeout(() => {
                document.body.removeChild(winnerElem);
            }, 1000);
        }

        function finishGame() {
            const winner = player1Score > player2Score ? "Jugador 1" : player1Score < player2Score ? "Jugador 2" : "Empate";
            alert(`El ganador es: ${winner}`);
            player1Score = 0;
            player2Score = 0;
            player1ScoreElem.textContent = player1Score;
            player2ScoreElem.textContent = player2Score;
        }

