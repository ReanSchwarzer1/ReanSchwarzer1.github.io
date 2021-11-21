(function () {
    "use strict";
    console.log("reading js");

    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const dice = document.getElementById("dice");
    const score = document.getElementById("score");
    const score1 = document.getElementById("score1");
    const score2 = document.getElementById("score2");
    const actionArea = document.getElementById("actions");
    const diceSound = new Audio("media/sword.wav");
    const switchSound = new Audio("media/switch.wav");
    const winSound = new Audio("media/win.wav");
    const playerDivs = [
        document.getElementById("k1"),
        document.getElementById("k2"),
    ];

    let gameData = {
        dice: [
            "images/1die.png",
            "images/2die.png",
            "images/3die.png",
            "images/4die.png",
            "images/5die.png",
            "images/6die.png",
        ],
        players: ["knight 1", "knight 2"],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29,
    };

    startGame.addEventListener("click", function () {
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = "<h2></h2>";
        gameControl.innerHTML += '<button id="quit">Quit Game?</button>';

        document.getElementById("quit").addEventListener("click", function () {
            location.reload();
        });

        throwDice();
    });

    function setUpTurn() {
        game.innerHTML = `<h3>Roll the dice for ${gameData.players[gameData.index]}</h3>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById("roll").addEventListener("click", function () {
            throwDice();
        });
    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            showCurrentScore();
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = "";
            document.getElementById("quit").innerHTML = "Wanna Start a New Round?";
            return true;
        } else {
            showCurrentScore();
            return false;
        }
    }

    function showCurrentScore() {
        score1.innerHTML = `score: ${gameData.score[0]}`;
        score2.innerHTML = `score: ${gameData.score[1]}`;
    }

    function throwDice() {
        actionArea.innerHTML = "";
        dice.innerHTML = "";

        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        dice.innerHTML += `<img class="dice" src="${gameData.dice[gameData.roll1 - 1]}">
        <img class="dice" src="${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        /*
        playerDivs[gameData.index].classList.add("sword");
        setTimeout(function () {
            playerDivs[gameData.index].classList.remove("sword");
        }, 500);
        */
        
        playerDivs[gameData.index].classList.add("slash");
        setTimeout(function () {
            playerDivs[gameData.index].classList.remove("slash");
        }, 500);

        if (gameData.rollSum === 2) { 
            switchSound.play();
            game.innerHTML += "<h3>Oh snap! Snake eyes!</h3>";
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); 
            checkWinningCondition();

            setTimeout(setUpTurn, 2000);
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) { 
            switchSound.play();
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); 
            game.innerHTML += `<h3>Sorry one of your rolls was a one, switching to ${gameData.players[gameData.index]}</h3>`;

            setTimeout(setUpTurn, 2000); 
        } else { 
            gameData.score[gameData.index] =
                gameData.score[gameData.index] + gameData.rollSum; 
            actionArea.innerHTML =
                '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';

            document
                .getElementById("rollagain")
                .addEventListener("click", function () {
                    throwDice();
                });

            document
                .getElementById("pass")
                .addEventListener("click", function () {
                    gameData.index
                        ? (gameData.index = 0)
                        : (gameData.index = 1);
                    setUpTurn();
                });

            if (checkWinningCondition()) {
                winSound.play();
            } else {
                diceSound.play();
            }
        }


    }
})();