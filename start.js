

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// canvas.width = 1024
canvas.width = 1524
// canvas.height = 576
canvas.height = 876

c.fillRect(0, 0, canvas.width, canvas.height)



const gravity = 0.7



const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  // imageSrc: './img/back.gif'
  imageSrc: './img/back10.gif'

})



const player = new Fighter({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  side: {
    x: 1
  },
  imageSrc: './img/samuraiMack/Idle.png',
  framesMax: 8,
  scale: 3.9,
  offset: {
    x: 215,
    y: 157
  },
  sprites: {
    idle: {
      imageSrc: './img/samuraiMack/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/samuraiMack/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/samuraiMack/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/samuraiMack/Fall.png',
      framesMax: 2
    },

    attack1: {
      imageSrc: './img/samuraiMack/Attack1.png',
      framesMax: 4
    },
    animateSword: {
      imageSrc: './img/samuraiMack/sword.png',
      framesMax: 6
    },

    takeHit: {
      imageSrc: './img/samuraiMack/Take Hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/samuraiMack/Death.png',
      framesMax: 6
    },

    idle5: {
      imageSrc: './img2/samuraiMack/Idle.png',
      framesMax: 4
    },
    run5: {
      imageSrc: './img2/samuraiMack/Run.png',
      framesMax: 8
    },
    jump5: {
      imageSrc: './img2/samuraiMack/Jump.png',
      framesMax: 2
    },
    fall5: {
      imageSrc: './img2/samuraiMack/Fall.png',
      framesMax: 2
    },

    attack5: {
      imageSrc: './img2/samuraiMack/Attack1.png',
      framesMax: 4
    },
    animateSword5: {
      imageSrc: './img2/samuraiMack/sword.png',
      framesMax: 6
    },

    takeHit5: {
      imageSrc: './img2/samuraiMack/Take Hit.png',
      framesMax: 3
    },
    death5: {
      imageSrc: './img2/samuraiMack/Death.png',
      framesMax: 6
    }
  },
  //the length and width of the attack box
  attackBox: {
    imageSrc: './img/kenji/sowrd.png',
    framesMax: 6,
    scale: 1,
    offset: {
      x: 145,
      y: 150
    },
    width: 250,
    height: 50
  }


})



const enemy = new Fighter({
  position: {
    x: 1200,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  side: {
    x: 1
  },
  color: 'blue',
  offset: {
    x: -100,
    y: 0
  },


  imageSrc: './img/kenji/Idle.png',
  framesMax: 4,
  scale: 3.9,
  offset: {
    x: 215,
    y: 167
  },
  sprites: {
    idle: {
      imageSrc: './img/kenji/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/kenji/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/kenji/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/kenji/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/kenji/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/kenji/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/kenji/Death.png',
      framesMax: 7
    },

    idle5: {
      imageSrc: './img2/kenji/Idle.png',
      framesMax: 4
    },
    run5: {
      imageSrc: './img2/kenji/Run.png',
      framesMax: 8
    },
    jump5: {
      imageSrc: './img2/kenji/Jump.png',
      framesMax: 2
    },
    fall5: {
      imageSrc: './img2/kenji/Fall.png',
      framesMax: 2
    },
    attack5: {
      imageSrc: './img2/kenji/Attack1.png',
      framesMax: 4
    },
    takeHit5: {
      imageSrc: './img2/kenji/Take hit.png',
      framesMax: 3
    },
    death5: {
      imageSrc: './img2/kenji/Death.png',
      framesMax: 7
    }


  },
  attackBox: {

    offset: {
      x: -255,
      y: 150
    },
    width: 170,
    height: 50
  }
})


const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  w: {
    pressed: false
  },
  ArrowUp: {
    pressed: false
  },
  r: {
    pressed: false
  }
}



// function check() {
//   // player movement

//   if (player.lastKey && keys.a.pressed === true) {
//     player.velocity.x = -5
//     if (player.position.x <= 0) {
//       player.velocity.x = 0
//       player.position.x = 0

//     }
//   } else if (player.lastKey && keys.d.pressed === true) {
//     player.velocity.x = 5
//     if (player.position.x >= canvas.width - 65) {
//       player.velocity.x = 0
//       player.position.x = canvas.width - 65
//     }
//   }



//   // if (player.lastKey && keys.w.pressed === true) {
//   //   player.velocity.y = -20
//   //   keys.w.pressed = false
//   //   keys.w.repeat === false
//   // }

//   if (player.position.y < 0) {
//     player.velocity.y = 0
//     player.position.y = 0
//   }

//   if (player.velocity.y < 0) {
//     player.switchSprite('jump5')
//   } else if (player.velocity.y > 0) {
//     player.switchSprite('fall5')
//   } else if (player.velocity.x != 0) {
//     player.switchSprite('run')
//   } else {
//     player.switchSprite('idle')
//   }

//   if (player.health === 0) {
//     player.switchSprite('death')
//   }

//   console.log('andas')
// }

// check()


function animate() {

  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()


  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  if (player.x <= enemy.x) {
    player.side.x = 1
    enemy.side.x = 1
  } else if (player.x > enemy.x) {
    player.side.x = -1
    enemy.side.x = -1
  }
  // player movement

  if (player.lastKey && keys.a.pressed === true) {
    player.velocity.x = -5
    if (player.position.x <= -150) {
      player.velocity.x = 0
      player.position.x = -150

    }
  } else if (player.lastKey && keys.d.pressed === true) {
    player.velocity.x = 5
    if (player.position.x >= canvas.width - 260) {
      console.log('check')
      player.velocity.x = 0
      player.position.x = canvas.width - 260
    }
  }

  



  // if (player.lastKey && keys.w.pressed === true) {
  //   player.velocity.y = -20
  //   keys.w.pressed = false
  //   keys.w.repeat === false
  // }

  if (player.position.y < 0) {
    player.velocity.y = 0
    player.position.y = 0
  }



  if (player.health === 0) {
    player.switchSprite('death')
  }



  // Enemy movement
  if (enemy.lastKey && keys.ArrowLeft.pressed === true) {
    enemy.velocity.x = -5
    if (enemy.position.x <= -150) {
      enemy.velocity.x = 0
      enemy.position.x = -150
      console.log('fuck')
    }
    // enemy.velocity.x = -5
    // enemy.switchSprite('run')
  } else if (enemy.lastKey && keys.ArrowRight.pressed === true) {
    enemy.velocity.x = 5
    if (enemy.position.x >= canvas.width - 260) {
      enemy.velocity.x = 0
      enemy.position.x = canvas.width - 260
    }
    // enemy.velocity.x = 5
    // enemy.switchSprite('run')
  }

  // if (enemy.lastKey && keys.ArrowUp.pressed === true) {
  //   enemy.velocity.y = -20
  //   keys.ArrowUp.pressed = false

  // }

  if (enemy.position.y < 0) {
    enemy.velocity.y = 0
    enemy.position.y = 0
  }

  // if (enemy.velocity.y < 0) {
  //   enemy.switchSprite('jump')
  // } else if (enemy.velocity.y > 0) {
  //   enemy.switchSprite('fall')
  // } else if (enemy.velocity.x != 0) {
  //   enemy.switchSprite('run')
  // } else {
  //   enemy.switchSprite('idle')
  // }


  if (enemy.health === 0) {
    enemy.switchSprite('death')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 2
  ) {

    enemy.takeHit()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }



  // if player misses
  if (player.isAttacking && player.framesCurrent === 2) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }


  //switch side
  //player
  if (player.position.x > enemy.position.x) {

    // if (
    //   rectangularCollision({
    //     rectangle1: enemy,
    //     rectangle2: player
    //   }) &&
    //   enemy.isAttacking &&
    //   enemy.framesCurrent === 2
    // ) {
    //   player.takeHit()
    //   enemy.isAttacking = false

    //   gsap.to('#playerHealth', {
    //     width: player.health + '%'
    //   })
    // }

    // player.attackBox.offset.x = player.attackBox.offset.x * -1
    if (player.position.y < 0) {
      player.velocity.y = 0
      player.position.y = 0
    }

    if (player.velocity.y < 0) {
      player.switchSprite('jump5')
    } else if (player.velocity.y > 0) {
      player.switchSprite('fall5')
    } else if (player.velocity.x != 0) {
      player.switchSprite('run5')
    } else {
      player.switchSprite('idle5')
    }

    // player.side.x = -1;
  } else {
    if (player.velocity.y < 0) {
      player.switchSprite('jump')
    } else if (player.velocity.y > 0) {
      player.switchSprite('fall')
    } else if (player.velocity.x != 0) {
      player.switchSprite('run')
    } else {
      player.switchSprite('idle')
    }

  }


  if (enemy.position.x < player.position.x) {
    

    // player.attackBox.offset.x = player.attackBox.offset.x * -1
    if (enemy.position.y < 0) {
      enemy.velocity.y = 0
      enemy.position.y = 0
    }

    if (enemy.velocity.y < 0) {
      enemy.switchSprite('jump5')
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite('fall5')
    } else if (enemy.velocity.x != 0) {
      enemy.switchSprite('run5')
    } else {
      enemy.switchSprite('idle5')
    }

    // player.side.x = -1;
  } else {
    if (enemy.velocity.y < 0) {
      enemy.switchSprite('jump')
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite('fall')
    } else if (enemy.velocity.x != 0) {
      enemy.switchSprite('run')
    } else {
      enemy.switchSprite('idle')
    }


  }


  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }



  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {


    determineWinner({ player, enemy, timerId })
  }
}

animate()


const image = new Image();
image.src = './img/samuraiMack/sword.png',
  // Draw the image when it's loaded
  image.onload = function () {
    // Inside your drawing function or wherever you want to draw the hitbox photo
    c.drawImage(image, this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);
  };






let lastKeyCode = 0
let lastWKeyCode = 0
//come back later

//player
document.addEventListener('keydown', (e) => {
  // if (e.code === "KeyW" && e.repeat === false) {
  //           if (lastWKeyCode < 2) {
  //               lastWKeyCode++;
  //               let timer = 2;
  //               console.log('key = ' + lastWKeyCode);
  //               function decreaseTimer() {
  //                   if (timer > 0) {
  //                       timer--;
  //                       console.log(timer);
  //                       setTimeout(decreaseTimer, 1000);
  //                       if (lastWKeyCode === 2){
  //                         player.velocity.y = 0
  //                         console.log('check')
  //                       }
  //                   } else {
  //                       lastWKeyCode = 0;
  //                   }
  //               }
  //               decreaseTimer();
  //           }
  //       }
  //   });



  // document.addEventListener("keydown", function(e) {
  //     
  // if (!keysDisabled && e.code === "KeyW" && e.repeat === false) {
  //   keysDisabled = true; // 禁用按键
  //   setTimeout(function() {
  //       keysDisabled = false; // 两秒后重新启用按键
  //   }, 2000);
  // }
  // });


  if (e.code === "ArrowUp" && e.repeat === false) {
    keys.ArrowUp.pressed = false
  }

  // girl character



  if (e.code === "KeyA" && e.repeat === false) {
    lastKeyCode++
    let timer = 2
    let timerId
    console.log('key = ' + lastKeyCode);
    function decreaseTimer() {
      if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 200)
        timer--
        console.log(timer)



        if (lastKeyCode === 2) {

          if (player.position.x > enemy.position.x) {
            player.position.x -= 100;
          } else {
          }

          lastKeyCode = 0
          timer = 0
        }

      } else {

        lastKeyCode = 0
      }
    }
    decreaseTimer()
  }

  if (e.code === "KeyD" && e.repeat === false) {
    lastKeyCode++
    let timer = 2
    let timerId
    console.log('key = ' + lastKeyCode);
    function decreaseTimer() {
      if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 200)
        timer--
        console.log(timer)



        if (lastKeyCode === 2) {

          if (player.position.x > enemy.position.x) {

          } else {
            player.position.x += 100;
          }

          lastKeyCode = 0
          timer = 0
        }

      } else {

        lastKeyCode = 0
      }
    }
    decreaseTimer()
  }

})



document.addEventListener('keydown', (e) => {


  //default setting 
  // attackBox: {
  //   offset: {
  //     x: 60,
  //     y: -20
  //   },
  //   width: 200,
  //   height: 160
  // }

  //try double at same time
  // if (e.code === "KeyD" || "KeyF"){
  //   player.position.x += 100;
  // }

  // }



  // player girl fighter
  //   if (e.code === "KeyF") {
  //     player.attackBox.width = 100
  //     player.attackBox.height = 50
  //     player.attackBox.offset.y = 35
  //     let timer = 4
  //     let timerId

  //       function decreaseTimer() {
  //         if (timer > 0) {
  //           timerId = setTimeout(decreaseTimer, 100)
  //           timer--

  //         }
  //         if (timer === 2) {
  //           player.attack()
  //         }
  //         if (timer === 1) {
  //           player.attack()
  //         }
  //         if (timer === 0) {
  //           player.attack()
  //         }
  //       }
  //     decreaseTimer()

  // }








  //player samurai
  // document.addEventListener("keydown", function(event) {
  //   if (event.code === "KeyR") {
  //     enemy.isAttacking = false;
  //     console.log('fucl');
  //   }
  // });



  if (e.code === "KeyF") {

    // sword.position.x = player.attackBox.x

    if (player.position.x > enemy.position.x) {
      player.attackBox.offset.x = -280
    } 
    // else {
    //   player.attackBox.offset.x = 185
    // }

  }

  //must check


  if (e.code === "KeyG") {
    player.attackBox.width = 200
    player.attackBox.height = 160
    player.attackBox.offset.y = -20
    if (player.position.x > enemy.position.x) {
      player.attackBox.offset.x = -200
    } else {
      player.attackBox.offset.x = 60
    }
  }

  if (e.code === "Comma") {
    if (player.position.x > enemy.position.x) {
      enemy.attackBox.offset.x = 155
    } else {
      enemy.attackBox.offset.x = -255
    }
  }

  // if (e.code === "KeyH") {
  //   player.attackBox.width = 50
  //   player.attackBox.height = 200
  //   player.attackBox.offset.y = -20

  //   //Force cancel action

  //   let timer = 5
  //   let timerId

  //   function decreaseTimer() {
  //     if (timer > 0) {
  //       timerId = setTimeout(decreaseTimer, 300)
  //       timer--

  //     }
  //     // let distance = player.position.x
  //     // console.log(distance)
  //     let swordImage = document.getElementById('./img/samuraiMack/sword.png')
  //     let distance = player.attackBox.offset.x


  //     if (timer === 5) {
  //       c.drawImage(swordImage, distance, player.attackBox.offset.y, player.attackBox.width, player.attackBox.height);
  //       distance += 50;
  //       sword.position.x = distance



  //       distance += 50
  //       player.attackBox.offset.x = distance
  //       console.log(distance)
  //       player.isAttacking = true
  //     }
  //     if (timer === 4) {
  //       distance += 100
  //       player.attackBox.offset.x = distance
  //       console.log(distance)
  //       player.isAttacking = true
  //     }
  //     if (timer === 3) {
  //       distance += 200
  //       player.attackBox.offset.x = distance
  //       console.log(distance)
  //       player.isAttacking = true
  //     }
  //     if (timer === 2) {
  //       distance += 300
  //       player.attackBox.offset.x = distance
  //       console.log(distance)
  //       player.isAttacking = true

  //     }
  //     if (timer === 0) {
  //       player.attackBox.width = 200
  //       player.attackBox.height = 160
  //       player.attackBox.offset.x = 60
  //       player.attackBox.offset.y = -20


  //     }
  //   }
  //   decreaseTimer()
  // }


  //   //teleportation
  //   if (e.code === "KeyH") {
  //   let timer = 5
  //   let timerId

  //   function decreaseTimer() {
  //     if (timer > 0) {
  //       timerId = setTimeout(decreaseTimer, 300)
  //       timer--

  //     }

  //     if (timer === 5) {
  //       player.position.x += 50;
  //       player.attackBox.offset.x += 50
  //       console.log(a)
  //       player.attack()
  //     }
  //     if (timer === 4) {
  //       player.position.x += 100;
  //       player.attack()
  //     }
  //     if (timer === 3) {
  //       player.position.x += 200;
  //       player.attack()
  //     }
  //     if (timer === 2) {
  //       player.position.x += 300;
  //       player.attack()

  //     }
  //     if (timer === 0) {
  //       player.attackBox.width = 200
  //       player.attackBox.height = 160
  //       player.attackBox.offset.x = 60
  //       player.attackBox.offset.y = -20


  //     }
  //   }
  //   decreaseTimer()
  // }



  //arrowup change 
  if (e.code === "ArrowUp") {
    enemy.attackBox.width = 300
    enemy.attackBox.height = 100
    enemy.attackBox.offset.y = 20

    // attackBox: {
    //   offset: {
    //     x: 60,
    //     y: -20
    //   },
    //   width: 200,
    //   height: 160
    // }
  }

});




let timer = 60
let timerId
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId })


  }
}


let lastKeyCount = 0
let lastAKeyCount = 0
let keysDisabled = false;
let keysADisabled = false;

window.addEventListener('keydown', (event) => {
  if (enemy.dead) {
    return; // Exit early if player is dead

  }
  if (player.dead) {
    return; // Exit early if player is dead
  }

  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break

      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      // case 'w':

      //   if (event.repeat === false && !keysDisabled) {
      //     lastKeyCount++
      //     if (lastKeyCount === 2) {
      //       let timer = 2
      //       let timerId
      //       console.log('key = ' + lastKeyCount);
      //       function decreaseTimer() {
      //         if (timer > 0) {
      //           timerId = setTimeout(decreaseTimer, 200)
      //           timer--
      //           console.log(timer)

      //           player.velocity.y = false

      //           lastKeyCount = 0
      //         }
      //       }
      //       decreaseTimer()
      //       console.log('correck')

      //     } else {
      //       player.velocity.y = -20;
      //     }

      //     keys.w.pressed = false;
      //   }
      //   break;

      case 'w':
        if (event.repeat === false && !keysDisabled) { // 如果不是重复按键且 "W" 键未被禁用
          lastKeyCount++;

          if (lastKeyCount === 2) {
            let timer = 2;
            let timerId;
            console.log('key = ' + lastKeyCount);
            function decreaseTimer() {
              if (timer > 0) {
                timerId = setTimeout(decreaseTimer, 100); // 200 毫秒改为 1000 毫秒
                timer--;
                console.log(timer);
                lastKeyCount = 0;
              } else {
                keysDisabled = false; // 在冷却时间结束后重新启用 "W" 键
              }
            }
            decreaseTimer();
            keysDisabled = true; // 在按下 "W" 键后禁用 "W" 键
            console.log('correct');
          } else {
            player.velocity.y = -20;
          }
          keys.w.pressed = false;
        }
        break;

      case 'f':
        if (event.repeat === false) {
          player.attack()
        }
        break
      case 'g':
        if (event.repeat === false) {
          player.attack()
        }
        break
    }


  }




  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':

        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      // case 'ArrowUp':
      //   if (event.repeat === false) {
      //     enemy.velocity.y = -20;
      //     keys.ArrowUp.pressed = false;
      //   }

      case 'ArrowUp':
        if (event.repeat === false && !keysADisabled) { // 如果不是重复按键且 "W" 键未被禁用
          lastAKeyCount++;

          if (lastAKeyCount === 2) {
            let timer = 2;
            let timerId;
            console.log('key = ' + lastAKeyCount);
            function decreaseTimer() {
              if (timer > 0) {
                timerId = setTimeout(decreaseTimer, 100); // 200 毫秒改为 1000 毫秒
                timer--;
                console.log(timer);
                lastAKeyCount = 0;
              } else {
                keysADisabled = false; // 在冷却时间结束后重新启用 "W" 键
              }
            }
            decreaseTimer();
            keysADisabled = true; // 在按下 "W" 键后禁用 "W" 键
            console.log('correct');
          } else {
            enemy.velocity.y = -20;
          }
          keys.w.pressed = false;
        }
        break;

      case ',':
        if (event.repeat === false) {
          enemy.attack()
        }
        break
    }



  }

})












window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 'w':
      keys.w.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
    case 'ArrowUp':
      keys.ArrowUp.pressed = false
      break
  }
})

