function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}

// function reset() {
//   playerWins = 0;
//   enemyWins = 0;
//   player.health = 100;
//   enemy.health = 100;
//   player.position = { x: 0, y: 330 };
//   enemy.position = { x: 900, y: 330};

// }




// function determineWinner({ player, enemy, timerId }) {
//   clearTimeout(timerId)
//   document.querySelector('#displayText').style.display = 'flex'
//   if (player.health === enemy.health) {
//     document.querySelector('#displayText').innerHTML = 'Tie'
//     exampleFunction();
//   } else if (player.health > enemy.health) {
//     document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
//     exampleFunction();
//   } else if (player.health < enemy.health) {
//     document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
//     exampleFunction();
//   }
// }








let playerWins = 0;
let enemyWins = 0;
let gamePaused = false;
let gameOver = false;

function reset() {

  player.health = 100;
  enemy.health = 100;
  player.dead = false
  enemy.dead = false
  gsap.to('#enemyHealth', {
    width: enemy.health + '%'
  })
  gsap.to('#playerHealth', {
    width: enemy.health + '%'
  })
  restart = true


}

function restartGame() {
  playerWins = 0;
  enemyWins = 0;
  player.health = 100;
  enemy.health = 100;
  player.position = { x: 0, y: 330 };
  enemy.position = { x: 1300, y: 330};
  playerWins = 0;
  enemyWins = 0;
  // gamePaused = false; 
  
}



let delaytime = 8
let timerI

let restart = true; // Assuming restart is initially true

function decreaseFunction() {
    
    if (restart) {
        // Start function again after 3000 milliseconds.
        setTimeout(() => {
            resetTime();
            resetPlayer();

        }, 3000);

        // Tell function not to interrupt next time.
        restart = false;

        // Exit early.
        return;
    }
    
}




function resetTime() {
  timer = 61
  time = 5
  startdecrease()
  reset()
  player.position = { x: 0, y: 330 };
  enemy.position = { x: 1300, y: 330};
  document.querySelector('#displayText').innerHTML = '';

  
}

function resetPlayer(){

  player.dead = false
  enemy.dead = false
  
}


function determineWinner({ player, enemy, timerId}) {
  
  clearTimeout(timerId);
  
  document.querySelector('#displayText').style.display = 'flex';

  if (enemy.health <= 0) {
    if (playertest < 362) {
      document.querySelector('#displayText').innerHTML = 'Player 1 Wins';
      decreaseFunction()
      enemy.switchSprite('death')
      enemy.dead = true
      
      
    }
    if (playertest > 362) {
      document.querySelector('#displayText').innerHTML = 'Player 1 Wins the Match!';
      enemy.dead = true

      return
      // console.log(playerWins)
    }

    
    playertest++

  } else if (player.health <= 0) {
    if (enemytest < 362) {
      document.querySelector('#displayText').innerHTML = 'Player 2 Wins';
      decreaseFunction()
      player.dead = true
      // console.log(playerWins)
      
    }
    if (enemytest > 362) {
      document.querySelector('#displayText').innerHTML = 'Player 2 Wins the Match!';
      gameOver = true;
      player.dead = true
      return
      // console.log(playerWins)
    }

    enemytest++


  } else if (player.health = enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Tie';
    decreaseFunction()
  }

  // if (test === 722) {
  //   document.querySelector('#displayText').innerHTML = 'Player 1 Wins the Match!';
  //   gameOver = true;
  //   // console.log(playerWins)
  //   decreaseFunction()
  // } else if (enemyWins === 2) {
  //   // document.querySelector('#displayText').innerHTML = 'Player 2 Wins the Match!';
  //   gameOver = true;
  //   decreaseFunction()
  // }

  if (gameOver) {
    gamePaused = true; 
  }
  // } else {
  //   restartGame(); 
  // }
}



var aud = document.querySelector("#ASong audio"); // Selecting the audio element inside the button
var isPlaying = true;

function playPause() {
    if (isPlaying) {
        aud.pause();
    } else {
        aud.play();
    }
    isPlaying = !isPlaying;
}

let playertest = 1
let enemytest = 1
let time = 4
let timerP
function startdecrease() {

  if (time > 0) {
    time--
    timerP = setTimeout(startdecrease, 1000)
    
    if (time === 3) {
      
      
      document.getElementById("countdown").innerHTML = "Ready";
    }
    if (time === 2) {
      document.getElementById("countdown").innerHTML = "Set";
    }
    if (time === 1) {
      document.getElementById("countdown").innerHTML = "Fight";
    }


    if (time === 0) {
      document.getElementById("countdown").innerHTML = "";
      decreaseTimer()
      playPause()

    }

  }
}
startdecrease()


