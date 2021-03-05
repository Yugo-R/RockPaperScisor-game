// 3 choices //
let choices = ['rock','scissors','paper'];
let pCounter = 0;
let cCounter = 0;

// Computer choice //
function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(computer, player){
    let playerWin = () => {alert(`Player win ,${player} vs ${computer} Score: ${pCounter}-${cCounter}`)}
    let computerWin = () => {alert(`Computer win,${player} vs ${computer} Score: ${pCounter}-${cCounter}`)}
    let noWin = () => {alert(`It's a tie,${player} vs ${computer} Score: ${pCounter}-${cCounter}`)}

    if (player === 'rock'){
        if (computer === 'scissors'){
            pCounter++;
            return playerWin();
        }
        else if (computer === 'paper'){
            cCounter++;
            return computerWin();
        }
        else{
            return noWin();
        }
    }
    else if (player === 'scissors'){
        if (computer === 'paper'){
            pCounter++;
            return playerWin();
        }
        else if (computer === 'rock'){
            cCounter++;
            return computerWin();
        }
        else{
            return noWin();
        }
    }
    else if (player == 'paper'){
        if (computer === 'rock'){
            pCounter++;
            return playerWin();
        }
        else if (computer === 'scissors'){
            cCounter++
            return computerWin();
        }
        else{
            return noWin();
        }
    }
    
    
}

function game(){
    while(pCounter < 5 && cCounter < 5){
        let playerSelection = prompt('Choose a fighter!').toLowerCase();
        let computerSelection = computerPlay();
        playRound(computerSelection,playerSelection);
    }
    alert('Game over');
    return 1;
}



game();

