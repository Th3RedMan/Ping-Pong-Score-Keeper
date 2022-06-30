const player1Button = document.querySelector(".p1-score-incrs")
const player2Button = document.querySelector(".p2-score-incrs")
const p1ScoreText = document.querySelector(".p1-score-text")
const p2ScoreText = document.querySelector(".p2-score-text")
const resetScoreButton = document.querySelector(".reset-score")
const winningScoreOption = document.querySelector(".score-selector")

let player1Score = 0
let player2Score = 0
let winningScore = 3
let gameOver = false

function addGameOverFalseClass() {
    player1Button.classList.add("game-over-false")
    player2Button.classList.add("game-over-false")
}

function removeGameOverClass() {
    player1Button.classList.remove("game-over-false")
    player2Button.classList.remove("game-over-false")
}

function gameStarting() {
    player1Score = 0
    player2Score = 0
    p1ScoreText.textContent = player1Score
    p2ScoreText.textContent = player2Score
    p1ScoreText.style.color = "black";
    p2ScoreText.style.color = "black"
    addGameOverFalseClass()
    gameOver = false
}

document.addEventListener('DOMContentLoaded', gameStarting, false);

player1Button.addEventListener("click", function () {
    if (!gameOver) {
        player1Score++

        if (player1Score === winningScore) {
            if (player1Score - player2Score >= 2) {
                p1ScoreText.style.color = "green";
                p2ScoreText.style.color = "red"
                gameOver = true
                removeGameOverClass()
            }
            else {
                winningScore += 1
                console.log(winningScore)
            }
        }

        p1ScoreText.textContent = player1Score
    }
})

player2Button.addEventListener("click", function () {
    if (!gameOver) {
        player2Score++

        if (player2Score === winningScore) {
            if (player2Score - player1Score >= 2) {
                p2ScoreText.style.color = "green";
                p1ScoreText.style.color = "red"
                removeGameOverClass()
                gameOver = true
            } else {
                winningScore += 1
            }
        }

        p2ScoreText.textContent = player2Score
    }
})

winningScoreOption.addEventListener("change", function () {
    winningScore = parseInt(this.value)
    gameStarting()
})

resetScoreButton.addEventListener("click", gameStarting)