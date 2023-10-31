let maxRounds = 0;
let currentRound = 1;
let player1Wins = 0;
let player2Wins = 0;
let player3Wins = 0;
let rounds = 0;

document.getElementById("startButton").addEventListener("click", function () {
    // Obtener el número de jugadores y rondas seleccionado
    const playerCount = parseInt(document.getElementById("playerCount").value);
    maxRounds = parseInt(document.getElementById("roundCount").value);

    // Crear jugadores (humanos y máquinas)
    createPlayers(playerCount);

    // Desactivar el botón "Comenzar Juego" y habilitar "Jugar"
    document.getElementById("startButton").disabled = true;
    document.getElementById("playButton").disabled = false;
    document.getElementById("resetButton").disabled = true;
});

document.getElementById("playButton").addEventListener("click", function () {
    // Verificar si se ha alcanzado el máximo de rondas
    if (currentRound > maxRounds) {
        updateResults(winner);
        updatePlayerWins();
        document.getElementById("resultText").textContent = "Juego terminado. Reinicia la página para jugar de nuevo.";
        return;
    }

    playRound();
    currentRound++;

    // Si se alcanzó el máximo de rondas, mostrar el botón de reinicio
    if (currentRound > maxRounds) {
        document.getElementById("resetButton").disabled = false;
    }
});

document.getElementById("resetButton").addEventListener("click", function () {
    // Reiniciar el juego
    currentRound = 1;
    player1Wins = 0;
    player2Wins = 0;
    player3Wins = 0;
    document.getElementById("round").textContent = currentRound;
    document.getElementById("player1Wins").textContent = player1Wins;
    document.getElementById("player2Wins").textContent = player2Wins;
    document.getElementById("player3Wins").textContent = player3Wins;

    // Habilitar el botón "Comenzar Juego" y desactivar "Jugar" y "Reiniciar"
    document.getElementById("startButton").disabled = false;
    document.getElementById("playButton").disabled = true;
    document.getElementById("resetButton").disabled = true;

    // Restaurar la imagen de manos cerradas
    for (let i = 1; i <= 3; i++) {
        const handImage = document.getElementById(`player${i}Hand`);
        handImage.src = "hand-0.png";
    }

    // Limpiar resultados anteriores
    document.getElementById("resultText").textContent = "";
});

function createPlayers(playerCount) {
    const playersDiv = document.getElementById("players");
    playersDiv.innerHTML = ""; // Limpiar jugadores anteriores

    for (let i = 1; i <= 3; i++) {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("col");

        // Si el jugador es humano, permite seleccionar 1 o 2 dedos
        if (i <= playerCount) {
            playerDiv.innerHTML = `
                <h3>Jugador ${i} (Humano)</h3>
                <select id="player${i}Select" class="form-control">
                    <option value="1">1 dedo</option>
                    <option value="2">2 dedos</option>
                </select>
            `;
        } else {
            // Si el jugador es una máquina, selecciona aleatoriamente 1 o 2 dedos
            const machineChoice = Math.floor(Math.random() * 2) + 1;
            playerDiv.innerHTML = `
                <h3>Jugador ${i} (Máquina)</h3>
                <select id="player${i}Select" class="form-control" disabled>
                    <option value="${machineChoice}" selected>${machineChoice} dedo${machineChoice > 1 ? "s" : ""}
                    </option>
                </select>
            `;
        }

        playerDiv.innerHTML += `
            <img id="player${i}Hand" src="hand-0.png" class="hand-image">
        `;

        playersDiv.appendChild(playerDiv);
    }
}

function playRound() {
    if (rounds >= maxRounds) {
        // Verificar si se ha alcanzado el máximo de rondas
        document.getElementById("playButton").disabled = true; // Desactivar el botón de Jugar
        document.getElementById("resultText").textContent = "Juego terminado.";
        return;
    }

    const player1Select = document.getElementById("player1Select");
    const player2Select = document.getElementById("player2Select");
    const player3Select = document.getElementById("player3Select");

    const player1Choice = parseInt(player1Select.value);
    const player2Choice = parseInt(player2Select.value);
    const player3Choice = parseInt(player3Select.value);

    // Determinar el ganador de la ronda
    let winner = "";
    if (player1Choice !== player2Choice && player1Choice !== player3Choice) {
        winner = "Jugador 1";
        player1Wins++;
    } else if (player2Choice !== player1Choice && player2Choice !== player3Choice) {
        winner = "Jugador 2";
        player2Wins++;
    } else if (player3Choice !== player1Choice && player3Choice !== player2Choice) {
        winner = "Jugador 3";
        player3Wins++;
    } else {
        // Si no hay un ganador único, aplicar reglas de empate
        if (player1Choice === player2Choice && player1Choice !== player3Choice) {
            winner = "Jugador 3";
            player3Wins++;
        } else if (player1Choice === player3Choice && player1Choice !== player2Choice) {
            winner = "Jugador 2";
            player2Wins++;
        } else if (player2Choice === player3Choice && player2Choice !== player1Choice) {
            winner = "Jugador 1";
            player1Wins++;
        } else {
            // Empate en todas las elecciones
            winner = "Empate";
        }
    }
    document.getElementById("player1Hand").src = `hand-${player1Choice}.png`;
    document.getElementById("player2Hand").src = `hand-${player2Choice}.png`;
    document.getElementById("player3Hand").src = `hand-${player3Choice}.png`;


    // Actualizar los resultados
    document.getElementById("results").textContent = `El ganador de la ronda ${rounds + 1} es: ${winner}`;

    // Actualizar los contadores de puntos
    document.getElementById("round").textContent = `Ronda ${rounds + 1}`;
    document.getElementById("player1Wins").textContent = `Jugador 1 : ${player1Wins} victorias`;
    document.getElementById("player2Wins").textContent = `Jugador 2 : ${player2Wins} victorias`;
    document.getElementById("player3Wins").textContent = `Jugador 3 : ${player3Wins} victorias`;

    rounds++;
}
