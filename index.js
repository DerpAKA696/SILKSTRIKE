
var lastPickedCharacter = "";

function ChangeCharacter(character) {
    switch(character) {
        case "煜翔學狗叫":
            document.getElementById("map").innerHTML = 'STAKTOWN - CLASSIC'
            document.getElementById("name").innerHTML = "<img src='./img/back9.gif' style='width:300px;height:130px;'>";
            break;
        case "草":
            document.getElementById("map").innerHTML = 'STAKTOWN - PEACE'
            document.getElementById("name").innerHTML = "<img src='./img/nightback.png' style='width:300px;height:130px;'>";
            break;
        case "幹":
            document.getElementById("map").innerHTML = 'STAKTOWN - FIRE'
            // document.getElementById("幹圖片").src = "./img/another-image2-updated.png";
            document.getElementById("name").innerHTML = "<img src='./img/fireback.gif' style='width:300px;height:130px;'>";
            break;
    }
    lastPickedCharacter = character;
}

function doSomethingWithLastPickedCharacter() {
  // Access the last picked character here
  console.log("The last picked character is: " + lastPickedCharacter);
}


console.clear();

const characterList = document.querySelectorAll('.character');

characterList.forEach(character => {
  character.addEventListener('click', () => {
    if (document.querySelector('.character.active')) { //1p 2p
      document.querySelector('.character.active').classList.remove('active');
    }
    character.classList.add('active');
  });
});


// function switchPage() {
//   var page1 = document.getElementById("page1");
//   var page2 = document.getElementById("page2");
  
//   page1.classList.remove("active");
//   page2.classList.add("active");
// }

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      document.getElementById('startButton').click();
      event.preventDefault();
  }
});

document.addEventListener('mousedown', function(event) {
  if (event.button === 0) {
      event.preventDefault();
  }
});

function switchDope() {
  // Set the new page URL here

  if (lastPickedCharacter === "煜翔學狗叫") {
    var newPageUrl = 'start.html';
  }
  if (lastPickedCharacter === "草") {
    var newPageUrl = 'start1.html';
  }
  if (lastPickedCharacter === "幹") {
    var newPageUrl = 'start2.html';
  } 
  if (lastPickedCharacter === ""){
    var newPageUrl = 'start.html';
  }
  
  
  
  // Navigate to the new page
  window.location.href = newPageUrl;
}

