console.log("welcome");
let turn = "X";
let isGameOver = false;

const changeTurn = () => {
  turn = turn === "X" ? "0" : "X";
  return turn;
};

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext'); // Retrieve the elements with the class 'boxtext'
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) &&
            (boxtexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Wins!";
            isGameOver = true;
        }
    });

    if (!isGameOver) {
        let allFilled = Array.from(boxtexts).every(box => box.innerText !== "");
        if (allFilled) {
          document.querySelector('.info').innerText = "It's a Draw!";
          isGameOver = true;
        }
      }
    };



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && !isGameOver) {
      boxtext.innerText = turn;
      changeTurn();
      checkWin();
      if(!isGameOver){
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  let boxtext = document.getElementsByClassName("boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  isGameOver = false;
  turn = "X";
  document.querySelector('.info').innerText = "Turn for " + turn;
  
});

