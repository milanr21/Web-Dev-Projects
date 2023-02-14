const againBtn = document.querySelector('.btn-again');
const inputNumber = document.querySelector('.number');
const checkBtn = document.querySelector('.check-btn');
const displayResult = document.querySelector('.display-result');
const displayScore = document.querySelector('.score-display');
const displayHighscore = document.querySelector('.highscore-display');

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);
displayScore.textContent = score;
displayHighscore.textContent = highScore;



checkBtn.addEventListener('click', function(){
    const guess = inputNumber.value;

    // console.log(guess);

    if(!guess) {
        displayResult.textContent = '😊 Add valid numbers';
    }

    else if (guess === secretNumber){
        displayResult.textContent = '💯 Correct Number';
        displayScore.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#FF96F9';
         
            if(score > highScore) {
                highScore = score;
                displayHighscore.textContent = highScore;
            }
        }


    else if (guess !== secretNumber){ 
        if(score > 1) {
            displayResult.textContent = guess > secretNumber ? '😒 Too High !!!':' 😥 Too low !!! ';
            score--;
            displayScore.textContent = score;
            
        } else {
            displayResult.textContent = '🥶 You lose the game !!!';
            displayScore.textContent = 0;
            // displayScore.textContent = score;
            checkBtn.disabled = true;
            checkBtn.style.cursor = 'not-allowed';
        }
    }
    
});