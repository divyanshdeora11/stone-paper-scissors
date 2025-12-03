let userScore = 0;
let compScore = 0;
let drawGamee = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscr = document.querySelector("#userScore");
const compscr = document.querySelector("#compScore");
const drwgme = document.querySelector("#drawGame");

const genCompChoice = () => {
    const arr = ["Rock", "Paper", "Scissor"];
    const idx = Math.floor(Math.random() * 3);
    return arr[idx];
}

const drawGame = () =>{
    drawGamee++;
    drwgme.innerText = drawGamee;
    msg.innerText = "Oopsss Game was Drawwww!!";
    msg.style.backgroundColor = "#654b02e8"; 
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userscr.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#dbc076e8"; 
    }
    else{
        compScore++;
        compscr.innerText = compScore
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#a90000ff"; 
    }
}
const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true; //Assume kiya hai ki hum jeet gye hai

        if(userChoice === "Rock"){
            //s, p
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissor" ? false : true;
        }
        else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
