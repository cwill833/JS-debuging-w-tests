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

}

function setComputerMoves(){

}