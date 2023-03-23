

let guessInputField = document.querySelector("#guessField");

let reset = document.querySelector('#reset');
let hint = document.querySelector('#hint');


let hintPara = document.querySelector('#hintPara');

//CREATES WINNING NUMBER
let winningNum = Math.floor(Math.random() * 100);
console.log(winningNum);
//GETS BOXS
let guessBtn = document.querySelector("#guessBtn")
let guessOne = document.querySelector('.guessOne');
let guessTwo = document.querySelector('.guessTwo');
let guessThree = document.querySelector('.guessThree');
let guessFour = document.querySelector('.guessFour');
let guessFive = document.querySelector('.guessFive');

// USED TO LOCK GUESSING IN THAT BOX
let executedOne = true;
let executedTwo = true;
let executedThree = true;
let executedFour = true;
let executedFive = true;

let winner;

// function to check how far the user is from getting the number right
function hotCold(){
    let difference = winningNum - guessInputField.value;
    console.log(difference);

    //for postive numbers
    if(difference >= 0 && difference <= 5){
        hintPara.textContent = "You're Super Hot";
    } else if(difference >= 0 && difference <= 10){
        hintPara.textContent = "You're warming up";
    } else if(difference >= 0 && difference <= 15){
        hintPara.textContent = "You're luke warm";
    } else if(difference >= 0 && difference <=20){
        hintPara.textContent = "You're getting cooler";
    } else if(difference >=0 && difference >= 21){
        hintPara.textContent = "You're cold";
    };
    //for negative numbers
    if(difference <= 0 && difference >= -5){
        hintPara.textContent = "You're Super Hot";
    } else if(difference <= 0 && difference >= -10){
        hintPara.textContent = "You're warming up";
    } else if(difference <= 0 && difference >= -15){
        hintPara.textContent = "You're luke warm";
    } else if(difference <= 0 && difference >= -20){
        hintPara.textContent = "You're getting cooler";
    } else if(difference <=0 && difference <= -21){
        hintPara.textContent = "You're cold";
    };
}

// function to check if correct number was entered and tell user they won
function youWin(){
    if(Number(guessInputField.value) === winningNum){
        console.log('you got it right');
        winner = true;
        hintPara.textContent = 'YOU WIN! CLICK RESET TO PLAY AGAIN!';
        document.querySelector(".container").style.backgroundColor = '#5CF35C';
        hintPara.style.fontSize = '50px';
    } else {
        // if user was wrong
        winner = false;
        console.log('you got it wrong');
        hotCold();
    }
}


//ON CLICK CHECKS BOX IS NOT LOCKED THEN LOGS NEW BOX
guessBtn.addEventListener("click", function(){
    console.log('you guessed');
    youWin();
    if (executedOne && !winner){
        guessOne.innerHTML = guessInputField.value;
        executedOne = false;
    } else if (executedTwo && !winner){
        guessTwo.innerHTML = guessInputField.value;
        executedTwo = false;
    } else if(executedThree && !winner){
        guessThree.innerHTML = guessInputField.value;
        executedThree = false;
    } else if(executedFour && !winner){
        guessFour.innerHTML = guessInputField.value;
        executedFour = false;
    } else if(executedFive && !winner){
        guessFive.innerHTML = guessInputField.value;
        executedFive = false;
    }
    if(executedFive === false && !winner){
        hintPara.textContent = `YOU LOSE THE WINNING NUMBER WAS ${winningNum}`
    }
    guessInputField.value = ""
})
//ON ENTER CHECKS BOX IS NOT LOCKED THEN LOGS NEW BOX
guessInputField.addEventListener("keypress", function(event){
    if(guessInputField.value > 0 && event.keyCode === 13){
        console.log('you pressed enter');
        youWin();
        if (executedOne && !winner){
            guessOne.innerHTML = guessInputField.value;
            executedOne = false;
        } else if (executedTwo && !winner){
            guessTwo.innerHTML = guessInputField.value;
            executedTwo = false;
        } else if(executedThree && !winner){
            guessThree.innerHTML = guessInputField.value;
            executedThree = false;
        } else if(executedFour && !winner){
            guessFour.innerHTML = guessInputField.value;
            executedFour = false;
        } else if(executedFive && !winner){
            guessFive.innerHTML = guessInputField.value;
            executedFive = false;
        }
        if(executedFive === false && !winner){
            hintPara.textContent = `YOU LOSE THE WINNING NUMBER WAS ${winningNum}`
        }
        guessInputField.value = ""
    }
})



// RESETS THE GAME ON CLICK
reset.addEventListener("click", function(){
    console.log('you reset me');
    //CHANGES TOP TITLE BACK
    hintPara.textContent = 'START GUESSING...';
    //MAKES NEW NUMBER
    winningNum = Math.floor(Math.random() * 100);
    console.log(winningNum)
    //MAKES THE GUESS BOXS BACK TO NOTHING
    guessOne.textContent = '-';
    guessTwo.textContent = '-';
    guessThree.textContent = '-';
    guessFour.textContent = '-';
    guessFive.textContent = '-';
    // UNLOCKS THE GUESSES
    executedOne = true;
    executedTwo = true;
    executedThree = true;
    executedFour = true;
    executedFive = true;

    hintPara.style.fontSize = '29.3px';

    document.querySelector(".container").style.backgroundColor = '#FCBA00';
})
//GIVES A HINT 4 RANDOM NUMBERS 2 THAT ARE CLOSER 2 THAT ARE ANY NUMBER THEN ALSO THE REAL NUMBER
hint.addEventListener("click", function(){
    console.log('you wanted a hint');
    hintPara.textContent = `HINT: ${Math.floor(Math.random() * winningNum)} ${winningNum} ${Math.floor(Math.random() * 100)}
    ${Math.floor(Math.random() * 100)} ${Math.floor(Math.random() * winningNum)}`
})