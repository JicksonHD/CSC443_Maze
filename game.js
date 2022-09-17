
let gamehasStarted = false;

const colorRed = () => {
   
    const walls = document.getElementsByClassName("boundary");
        for( let i = 0; i < walls.length; i++){
            walls[i].style.backgroundColor = "#ff8888";
        }
  
}

const colorDefault = () => {

    const walls = document.getElementsByClassName("boundary");
    for(let i =0; i < walls.length;i++){
        walls[i].style.backgroundColor = "#eeeeee";
    }
}

const gameStart = (value) =>{
    if(value === "start"){
        console.log("game has started");
        colorDefault();
        let status = document.getElementById("status");
        status.innerText = "Begin by moving your mouse over the S .";
        gamehasStarted = true;
    }
}
const gameEnd = () => {
    gamehasStarted = false;
}

const collisionCheck = (value) => {
    if((value === "") || (value === "boundary1")){
        colorRed();
        let status = document.getElementById("status");
        status.innerText = "You lost";
        gamehasStarted = true;
        console.log("game has ended");
        gameEnd();
    }
    else if(value === "end"){
        
        let status = document.getElementById("status");
        status.innerText = "You won";
        gamehasStarted = true;
        console.log("game has ended");
        gameEnd();
    }
}
window.onload = () => {
    window.addEventListener("mousemove", (e) => {
        let value = e.target.id;

        console.log(value);

        gameStart(value);

        if(gamehasStarted){
            collisionCheck(value);
        }
    });
}
