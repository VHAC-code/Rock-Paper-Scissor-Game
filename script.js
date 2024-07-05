let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const p = document.querySelector("#user-score");
const pr = document.querySelector("#comp-score");
const names = document.querySelector("#name");
 
let userName = prompt("give your name");
names.innerText = userName;

const genCompChoice = () => {
    const options = ["rock", "Paper", "scissor"];
   const randIdx =  Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame = ()=>{
    console.log("game draw beacuse both choices are equal");
    msg.innerText = "game DRAW!";
}

const showWinner = (userWin) => {
if(userWin == true){
    console.log(`${userName} won the match`);
    msg.innerText = `${userName} win!`;
    userScore++;
    p.innerText = userScore;
}
else {
    console.log(`YOU loss the match`);
    msg.innerText = `${userName} Lose!`;
    compScore++;
    pr.innerText = compScore;
}
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){  //in this whole line there is problem
            //rock, scissor
           userWin = compChoice === "scissor" ? false : true; 
        }
        else{// user = scissor
            //comp = rock,paper
            userWin = compChoice === "rock" ? false : true;

        }

        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice =  choice.getAttribute("id");
// console.log("choice was clicked", userChoice);
playGame(userChoice);
    })
})