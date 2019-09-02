// All code should be written in this file.

// global variables
let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType, playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType
let playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue, playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue

// Main functionality - functions
function setPlayerMoves (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
    if((player === 'Player One') && 
    (moveOneType == 'rock' || moveOneType == 'scissors' || moveOneType == 'paper' ) &&
    (moveTwoType == 'rock' || moveTwoType == 'scissors' || moveTwoType == 'paper' ) &&
    (moveThreeType == 'rock' || moveThreeType == 'scissors' || moveThreeType == 'paper') &&
    ((moveOneValue < 99 && moveOneValue > 0) && (moveTwoValue < 99 && moveTwoValue > 0) && (moveThreeValue < 99 && moveThreeValue > 0)) &&
    (moveOneValue + moveTwoValue + moveThreeValue <= 99)
    ){
        playerOneMoveOneType = moveOneType
        playerOneMoveTwoType = moveTwoType
        playerOneMoveThreeType = moveThreeType
        playerOneMoveOneValue = moveOneValue
        playerOneMoveTwoValue = moveTwoValue
        playerOneMoveThreeValue = moveThreeValue
    }
    else if ((player === 'Player Two') &&
    (moveOneType == 'rock' || moveOneType == 'scissors' || moveOneType == 'paper' ) &&
    (moveTwoType == 'rock' || moveTwoType == 'scissors' || moveTwoType == 'paper' ) &&
    (moveThreeType == 'rock' || moveThreeType == 'scissors' || moveThreeType == 'paper') &&
    ((moveOneValue < 99 && moveOneValue > 0) && (moveTwoValue < 99 && moveTwoValue > 0) && (moveThreeValue < 99 && moveThreeValue > 0)) &&
    (moveOneValue + moveTwoValue + moveThreeValue <= 99)
    ){
        playerTwoMoveOneType = moveOneType
        playerTwoMoveTwoType = moveTwoType
        playerTwoMoveThreeType = moveThreeType
        playerTwoMoveOneValue = moveOneValue
        playerTwoMoveTwoValue = moveTwoValue
        playerTwoMoveThreeValue = moveThreeValue
    }
}

function getRoundWinner(int){
    if(int === 1 && 
        (
        playerOneMoveOneType != undefined && 
        playerOneMoveOneValue != undefined &&  
        playerTwoMoveOneType != undefined && 
        playerTwoMoveOneValue != undefined 
        )
        ){
        if(playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors'){
            return 'Player One'
        } 
        else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'paper'){
            return 'Player Two'
        }
        else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'rock'){
            if(playerOneMoveOneValue > playerTwoMoveOneValue){
                return 'Player One'
            } 
            else if(playerOneMoveOneValue < playerTwoMoveOneValue){
                return 'Player Two'
            }
            else {
                return 'Tie'
            }
        }
        if(playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'scissors'){
            return 'Player Two'
        } 
        else if (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock'){
            return 'Player One'
        }
        else if (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'paper'){
            if(playerOneMoveOneValue > playerTwoMoveOneValue){
                return 'Player One'
            } 
            else if(playerOneMoveOneValue < playerTwoMoveOneValue){
                return 'Player Two'
            }
            else {
                return 'Tie'
            }
        }
        if(playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'paper'){
            return 'Player One'
        } 
        else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'rock'){
            return 'Player Two'
        }
        else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'scissors'){
            if(playerOneMoveOneValue > playerTwoMoveOneValue){
                return 'Player One'
            } 
            else if(playerOneMoveOneValue < playerTwoMoveOneValue){
                return 'Player Two'
            }
            else {
                return 'Tie'
            }
        }
    }
    else if(int === 2 &&
        (
        playerOneMoveTwoType != undefined && 
        playerOneMoveTwoValue != undefined && 
        playerTwoMoveTwoType != undefined && 
        playerTwoMoveTwoValue != undefined
        )
        ){
        if(playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors'){
            return 'Player One'
        } 
        else if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'paper'){
            return 'Player Two'
        }
        else if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'rock'){
            if(playerOneMoveOneValue > playerTwoMoveOneValue){
                return 'Player One'
            } 
            else if(playerOneMoveTwoValue < playerTwoMoveTwoValue){
                return 'Player Two'
            }
            else {
                return 'Tie'
            }
        }
        if(playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'scissors'){
            return 'Player Two'
        } 
        else if (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock'){
            return 'Player One'
        }
        else if (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'paper'){
            if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
                return 'Player One'
            } 
            else if(playerOneMoveTwoValue < playerTwoMoveTwoValue){
                return 'Player Two'
            }
            else {
                return 'Tie'
            }
        }
        if(playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper'){
            return 'Player One'
        } 
        else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'rock'){
            return 'Player Two'
        }
        else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'scissors'){
            if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
                return 'Player One'
            } 
            else if(playerOneMoveTwoValue < playerTwoMoveTwoValue){
                return 'Player Two'
            }
            else {
                return 'Tie'
            }
        }
    }
    else if(int === 3 && 
        (
        playerOneMoveThreeType != undefined && 
        playerOneMoveThreeValue != undefined &&  
        playerTwoMoveThreeType != undefined && 
        playerTwoMoveThreeValue != undefined
        )
        ){
        if(playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors'){
            return 'Player One'
        } 
        else if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'paper'){
            return 'Player Two'
        }
        else if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'rock'){
            if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
                return 'Player One'
            } 
            else if(playerOneMoveThreeValue < playerTwoMoveThreeValue){
                return 'Player Two'
            }
            else {
                return 'Tie'
            }
        }
        if(playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'scissors'){
            return 'Player Two'
        } 
        else if (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock'){
            return 'Player One'
        }
        else if (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'paper'){
            if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
                return 'Player One'
            } 
            else if(playerOneMoveThreeValue < playerTwoMoveThreeValue){
                return 'Player Two'
            }
            else {
                return 'Tie'
            }
        }
        if(playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper'){
            return 'Player One'
        } 
        else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'rock'){
            return 'Player Two'
        }
        else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'scissors'){
            if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
                return 'Player One'
            } 
            else if(playerOneMoveThreeValue < playerTwoMoveThreeValue){
                return 'Player Two'
            }
            else {
                return 'Tie'
            }
        }
    }
    else {
        return null
    }
}

function getGameWinner(){
    let player1 = 0
    let player2 = 0

    if(
        playerOneMoveOneType != undefined &&
        playerOneMoveOneValue != undefined &&
        playerOneMoveTwoType != undefined &&
        playerOneMoveTwoValue != undefined &&
        playerOneMoveThreeType != undefined &&
        playerOneMoveThreeValue != undefined &&
        playerTwoMoveOneType != undefined &&
        playerTwoMoveOneValue != undefined &&
        playerTwoMoveTwoType != undefined &&
        playerTwoMoveTwoValue != undefined &&
        playerTwoMoveThreeType != undefined &&
        playerTwoMoveThreeValue != undefined 
    ){
        if(playerOneMoveOneType === 'rock'){
            if(playerTwoMoveOneType === 'paper'){
                player2++
            }
            else if(playerTwoMoveOneType === 'scissors'){
                player1++
            }
            else if(playerTwoMoveOneType === 'rock'){
                if (playerOneMoveOneValue > playerTwoMoveOneValue){
                    player1++
                }
                else if(playerOneMoveOneValue < playerTwoMoveOneValue){
                    player2++
                }
                else {
                    player1++
                    player2++
                }
            }
        } 
        else if (playerOneMoveOneType === 'paper'){
            if(playerTwoMoveOneType === 'scissors'){
                player2++
            }
            else if(playerTwoMoveOneType === 'rock'){
                player1++
            }
            else if(playerTwoMoveOneType === 'paper'){
                if (playerOneMoveOneValue > playerTwoMoveOneValue){
                    player1++
                }
                else if(playerOneMoveOneValue < playerTwoMoveOneValue){
                    player2++
                }
                else {
                    player1++
                    player2++
                }
            }
        }
        else if (playerOneMoveOneType === 'scissors'){
            if(playerTwoMoveOneType === 'paper'){
                player1++
            }
            else if(playerTwoMoveOneType === 'rock'){
                player2++
            }
            else if(playerTwoMoveOneType === 'scissors'){
                if (playerOneMoveOneValue > playerTwoMoveOneValue){
                    player1++
                }
                else if(playerOneMoveOneValue < playerTwoMoveOneValue){
                    player2++
                }
                else {
                    player1++
                    player2++
                }
            }
        }
        if(playerOneMoveTwoType === 'paper'){
            if(playerTwoMoveTwoType === 'scissors'){
                player2++
            }
            else if(playerTwoMoveTwoType === 'rock'){
                player1++
            }
            else if(playerTwoMoveTwoType === 'paper'){
                if (playerOneMoveTwoValue > playerTwoMoveTwoValue){
                    player1++
                }
                else if(playerOneMoveTwoValue < playerTwoMoveTwoValue){
                    player2++
                }
                else {
                    player1++
                    player2++
                }
            }
        }
        else if(playerOneMoveTwoType === 'rock' ){
            if(playerTwoMoveTwoType === 'paper'){
                player2++
            }
            else if(playerTwoMoveTwoType === 'scissors'){
                player1++
            }
            else if(playerTwoMoveTwoType === 'rock'){
                if (playerOneMoveTwoValue > playerTwoMoveTwoValue){
                    player1++
                }
                else if(playerOneMoveTwoValue < playerTwoMoveTwoValue){
                    player2++
                }
                else {
                    player1++
                    player2++
                }
            }
        }
        else if(playerOneMoveTwoType === 'scissors' ){
            if(playerTwoMoveTwoType === 'paper'){
                player1++
            }
            else if(playerTwoMoveTwoType === 'rock'){
                player2++
            }
            else if(playerTwoMoveTwoType === 'scissors'){
                if (playerOneMoveTwoValue > playerTwoMoveTwoValue){
                    player1++
                }
                else if(playerOneMoveTwoValue < playerTwoMoveTwoValue){
                    player2++
                }
                else {
                    player1++
                    player2++
                }
            }
        }
        if(playerOneMoveThreeType === 'scissors'){
            if(playerTwoMoveThreeType === 'paper'){
                player1++
            }
            else if(playerTwoMoveThreeType === 'rock'){
                player2++
            }
            else if(playerTwoMoveThreeType === 'scissors'){
                if (playerOneMoveThreeValue > playerTwoMoveThreeValue){
                    player1++
                }
                else if(playerOneMoveThreeValue < playerTwoMoveThreeValue){
                    player2++
                }
                else {
                    player1++
                    player2++
                }
            }
        }
        else if(playerOneMoveThreeType === 'rock'){
            if(playerTwoMoveThreeType === 'paper'){
                player2++
            }
            else if(playerTwoMoveThreeType === 'scissors'){
                player1++
            }
            else if(playerTwoMoveThreeType === 'rock'){
                if (playerOneMoveThreeValue > playerTwoMoveThreeValue){
                    player1++
                }
                else if(playerOneMoveThreeValue < playerTwoMoveThreeValue){
                    player2++
                }
                else {
                    player1++
                    player2++
                }
            }
        }
        else if(playerOneMoveThreeType === 'paper'){
            if(playerTwoMoveThreeType === 'scissors'){
                player2++
            }
            else if(playerTwoMoveThreeType === 'rock'){
                player1++
            }
            else if(playerTwoMoveThreeType === 'paper'){
                if (playerOneMoveThreeValue > playerTwoMoveThreeValue){
                    player1++
                }
                else if(playerOneMoveThreeValue < playerTwoMoveThreeValue){
                    player2++
                }
                else {
                    player1++
                    player2++
                }
            }
        }
    }
    else {
        return null
    }

    if(player1 > player2){
        return "Player One"
    } 
    else if(player1 < player2){
        return "Player Two"
    }
    else {
        return "Tie"
    }

}

function setComputerMoves(){

}