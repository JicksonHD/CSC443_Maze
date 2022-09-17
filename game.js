
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
        gamehasStarted = true;
    }
}
const gameEnd = () => {
    gamehasStarted = false;
}

const collisionCheck = (value) => {
    if((value === "") || (value === "boundary1")){
        colorRed();
        console.log("game has ended");
        gameEnd();
    }
    else if(value === "end"){
        alert("You Won");
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
