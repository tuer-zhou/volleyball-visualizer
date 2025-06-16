import {Player} from "./player.js";

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d", { alpha: false });
const dpr = window.devicePixelRatio;
context.canvas.width = 900 * dpr;
context.canvas.height = 900 * dpr;
context.scale(dpr, dpr);
canvas.style.width = "900px";
canvas.style.height = "900px";

const radius = 35;
const systems = {
    "4:2 alt":[
        new Player("MB2"),
        new Player("S1"),
        new Player("OH1"),
        new Player("MB1"),
        new Player("S2"),
        new Player("OH2")
    ],
    "4:2":[
        new Player("OH2"),
        new Player("S1"),
        new Player("MB1"),
        new Player("OH1"),
        new Player("S2"),
        new Player("MB2")
    ],
    "5:1":[
        new Player("S"),
        new Player("OH1"),
        new Player("MB1"),
        new Player("D"),
        new Player("OH2"),
        new Player("MB2")
    ]
};

let players = systems["5:1"];

var systemSelector = document.getElementById("system");
systemSelector.onchange = () =>{
    players = systems[systemSelector.value];
    setNewPosition();
    selectedPlayer = null;
};
systemSelector.value = "5:1";

var disableBorders = document.getElementById("disable_borders");




document.addEventListener("mousemove", mouseMoveHandler);
document.addEventListener("mousedown", mouseDownHandler);
document.addEventListener("mouseup", mouseUpHandler);

document.addEventListener("keydown", keyPressHandler);

console.log(players);
context.font = "30px Arial";
context.textAlign = "center";
context.textBaseline = "middle";

let selectedPlayer = null;
let mouse = {
    x:0,
    y:0,
    pressed:false
}

function mouseDownHandler(e){
    mouse.pressed = true;
    const relativeX = e.clientX - canvas.offsetLeft;
    const relativeY = e.clientY - canvas.offsetTop;
    console.log(relativeX + ": " + relativeY);
    if(selectedPlayer != null){
        selectedPlayer = null;
        return;
    }
    for(let player of players){
        if((player.currentPosition.x-relativeX) ** 2 + (player.currentPosition.y - relativeY)**2 <= radius ** 2){
            console.log(player);
            selectedPlayer = player;
            return;
        }
    }
    selectedPlayer = null;
}
function mouseUpHandler(e){
    mouse.pressed = false;
    selectedPlayer = null;
}

function mouseMoveHandler(e){
    mouse.x = e.clientX - canvas.offsetLeft;
    mouse.y = e.clientY - canvas.offsetTop;
}

function keyPressHandler(e){
    console.log(e.code);
    if(e.code == "ArrowRight" || e.code == "KeyD"){
        nextRotation();
    }else if(e.code == "ArrowLeft" || e.code == "KeyA"){
        prevRotation();
    }else if(e.code == "KeyR"){
        setNewPosition();
    }
}


function drawPlayerSelf(ctx, player){
    ctx.strokeStyle = player.color;
    ctx.fillStyle = "black";
    ctx.fillText(player.name, player.currentPosition.x, player.currentPosition.y);
    ctx.beginPath();
    ctx.arc(player.currentPosition.x, player.currentPosition.y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function setNewPosition(){
    for(let i = 0; i < players.length; i++){
        switch(i){
            case 0:
                players[i].newPosition.x = (context.canvas.width/6)*5;
                players[i].newPosition.y = (context.canvas.height/4)*3;
                break;
            case 1:
                players[i].newPosition.x = (context.canvas.width/6)*5;
                players[i].newPosition.y = (context.canvas.height/4)*1;
                break;
            case 2:
                players[i].newPosition.x = (context.canvas.width/6)*3;
                players[i].newPosition.y = (context.canvas.height/4)*1;
                break;
            case 3:
                players[i].newPosition.x = (context.canvas.width/6)*1;
                players[i].newPosition.y = (context.canvas.height/4)*1;
                break;
            case 4:
                players[i].newPosition.x = (context.canvas.width/6)*1;
                players[i].newPosition.y = (context.canvas.height/4)*3;
                break;
            case 5:
                players[i].newPosition.x = (context.canvas.width/6)*3;
                players[i].newPosition.y = (context.canvas.height/4)*3;
                break;
        }
    }
}

document.getElementById("prevBtn").onclick = prevRotation;
function prevRotation(){
    players.unshift(players.pop());
    setNewPosition();
    console.log("prev rotation");
    
}

document.getElementById("reset").onclick = reset;
function reset(){
    setNewPosition();
}

document.getElementById("nextBtn").onclick = nextRotation;
function nextRotation(){
    players.push(players.shift());
    setNewPosition();
    console.log("next rotation");
}

function resetColor(){
    for(let player of players){
        player.color = "black";
    }
}

function drawBorder(context, borderLeft, borderRight, borderTop, borderBottom){
    context.strokeStyle = "red";

    context.beginPath();

    // left line
    context.moveTo(borderLeft, borderTop);
    context.lineTo(borderRight, borderTop);
    //context.stroke();
    
    // top line
    context.moveTo(borderLeft, borderTop);
    context.lineTo(borderLeft, borderBottom);
    //context.stroke();

    // right line
    context.moveTo(borderRight, borderTop);
    context.lineTo(borderRight, borderBottom);
    //context.stroke();

    //bottom line
    context.moveTo(borderLeft, borderBottom);
    context.lineTo(borderRight, borderBottom);
    context.stroke();
}

setNewPosition();
function draw(){
    // draws white rect over whole screen to clean it
    context.fillStyle = "white";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);


    if(selectedPlayer != null){
        let posX = mouse.x;
        let posY = mouse.y;
        
        const index = players.findIndex((e) => e == selectedPlayer);
        let borderTop = 0;
        let borderLeft = 0;
        let borderBottom= context.canvas.height;
        let borderRight = context.canvas.width;
        if(!disableBorders.checked){
            switch(index){
                case 0:
                    borderTop = players[1].currentPosition.y;
                    borderLeft = players[5].currentPosition.x;
                    players[1].color = "red";
                    players[5].color = "red";
                    break;
                case 1:
                    borderBottom = players[0].currentPosition.y;
                    borderLeft = players[2].currentPosition.x;
                    players[0].color = "red";
                    players[2].color = "red";
                    break;
                case 2:
                    borderLeft = players[3].currentPosition.x;
                    borderBottom = players[5].currentPosition.y;
                    borderRight = players[1].currentPosition.x;
                    players[3].color = "red";
                    players[5].color = "red";
                    players[1].color = "red";
                    break;
                case 3:
                    borderRight = players[2].currentPosition.x;
                    borderBottom = players[4].currentPosition.y;
                    players[2].color = "red";
                    players[4].color = "red";
                    break;
                case 4:
                    borderTop = players[3].currentPosition.y;
                    borderRight = players[5].currentPosition.x;
                    players[3].color = "red";
                    players[5].color = "red";
                    break;
                case 5:
                    borderLeft = players[4].currentPosition.x;
                    borderTop = players[2].currentPosition.y;
                    borderRight = players[0].currentPosition.x;
                    players[4].color = "red";
                    players[2].color = "red";
                    players[0].color = "red";
                    break;
            }
        }
        
        posX = Math.min(borderRight-radius, Math.max(borderLeft+radius, posX));
        posY = Math.min(borderBottom-radius, Math.max(borderTop+radius, posY));
        drawBorder(context, borderLeft, borderRight, borderTop, borderBottom);
            
        selectedPlayer.currentPosition.x = posX;
        selectedPlayer.currentPosition.y = posY;
        selectedPlayer.newPosition.x = posX;
        selectedPlayer.newPosition.y = posY;
            
    }
    for(let i = 0; i < players.length; i++){
        players[i].move(7);
        drawPlayerSelf(context, players[i]);
    }
    resetColor();
    
    window.requestAnimationFrame(draw);
}

draw();
