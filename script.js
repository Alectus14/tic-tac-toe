"use strict";

let inputsArray = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

const btnNewGame = document.querySelector("#reset");
const playGrid = document.querySelectorAll(".btn");
const labelTurn = document.querySelector(".turn");
const labelHeading = document.querySelector(".header");
//Event listeners
playGrid.forEach(function (btn) {
    btn.addEventListener("click", function () {
        btn.value = currentPlayer;
        btn.disabled = true;
        inputsArray[btn.id - 1] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        labelTurn.textContent = `Player ${currentPlayer} turn`;
        ticTacToe();
    });
});

btnNewGame.addEventListener("click", function () {
    inputsArray = ["", "", "", "", "", "", "", "", ""];
    playGrid.forEach((element) => {
        element.value = "";
        element.disabled = false;
    });
    currentPlayer = "X";
    labelTurn.textContent = `Player ${currentPlayer} turn`;
});

const ticTacToe = function () {
    for (let i = 0; i < winningConditions.length; i++) {
        let condition = winningConditions[i];

        let a = inputsArray[condition[0] - 1];
        let b = inputsArray[condition[1] - 1];
        let c = inputsArray[condition[2] - 1];

        if (a == b && b == c && c != "") {
            let winner = currentPlayer === "X" ? "O" : "X";
            labelTurn.textContent = `🎉 Player ${winner} won 🎉`;
            playGrid.forEach((element) => (element.disabled = true));
            break;
        } else if (!inputsArray.includes("")) {
            labelTurn.textContent = "Draw";
        }
    }
};

const rgbColorGenerator = function () {
    return `rgb(${Math.trunc(Math.random() * 256)}, ${Math.trunc(
        Math.random() * 256
    )}, ${Math.trunc(Math.random() * 256)})`;
};

const lgbtLights = function () {
    setInterval(function () {
        labelHeading.style.color = rgbColorGenerator();
    }, 1000);
};

lgbtLights();
