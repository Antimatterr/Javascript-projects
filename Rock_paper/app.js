const game = ()=> {
  let pscore = 0;
  let cscore = 0;  

  //start the game
  const startGame = ()=> {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');
    const quitBtn = document.querySelector('.end button');

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.remove("fadeOut");
    });

    //quit game
    quitBtn.addEventListener("click", () => {
      match.classList.add("fadeOut");
      setTimeout(() => { 
        introScreen.classList.remove("fadeOut");
      }, 1000)
      const playerScore = document.querySelector('.player-score');
      const computerScore = document.querySelector('.computer-score');
      playerScore.children[1].textContent=0;
      computerScore.children[1].textContent = 0;  
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    for(var i=0;i<hands.length;i++){
      hands[i].addEventListener('animationend', function(){
        this.style.animation="";
      });
    };

    //computer option
    const computerOptions = ['rock', 'paper', 'scissors'];

    for(var i=0;i<options.length;i++){
    options[i].addEventListener('click',function(){
      
    //computer choice
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];

    setTimeout(() => {
      //here we call compare hands
      comparehands(this.textContent,computerChoice);
      //update images
      playerHand.src = `./assets/${this.textContent}.png`;
      computerHand.src = `./assets/${computerChoice}.png`;
    }, 2000);
      
    //hand animation
    playerHand.style.animation = "shakePlayer 2s ease";
    computerHand.style.animation = "shakeComputer 2s ease";
    });
  };
  };


  //function tocompare hands and update score board
  const comparehands = (playerChoice, computerChoice) => {
    const winners = document.querySelector('.winner');
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');


    if(playerChoice === computerChoice){
      winners.textContent = 'Its a Tie';
      return;
    }
    else if(playerChoice === 'rock'){
      if(computerChoice === 'scissors'){
        winners.textContent = 'Player Wins';
        pscore++;
        playerScore.children[1].textContent = pscore;
        return;
      }else{
        winners.textContent = 'Computer Wins';
        cscore++;
        computerScore.children[1].textContent = pscore;
        return;
      }
    }
    else if(playerChoice === 'paper'){
      if(computerChoice === 'rock'){
        winners.textContent = 'Player Wins';
        pscore++;
        playerScore.children[1].textContent = pscore;
        return;
      }else{
        winners.textContent = 'Computer Wins';
        cscore++;
        computerScore.children[1].textContent = cscore;
        return;
      }
    }
    else if(playerChoice === 'scissors'){
      if(computerChoice === 'paper'){
        winners.textContent = 'Player Wins';
        pscore++;
        playerScore.children[1].textContent = pscore;
        return;
      }else{
        winners.textContent = 'Computer Wins';
        cscore++;
        computerScore.children[1].textContent = cscore;
        return;
      }
    }
  }

  //call al the inner functions
  startGame();
  playMatch();
}
//start the game
game();