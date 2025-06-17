import { systems, serve, receive, release, defense, States } from "./consts.js";
import { mouse } from "./input.js";
import { Ball } from "./ball.js";
import { speed, systemSelector, disableBorders } from "./buttons.js";
import { global } from "./global.js";


export var canvas = document.getElementById("myCanvas");
export var context = canvas.getContext("2d", { alpha: true });
const dpr = window.devicePixelRatio;
context.canvas.width = 900;
context.canvas.height = 900;

// to fit 1040 (2 * radius + 900 + 2 * radius) into 900
context.scale(0.865384615, 0.865384615);
export const radius = 35;
context.translate(radius*2,radius*2);
canvas.style.width = "900px";
canvas.style.height = "900px";

let ball = new Ball(20);




export let players = systems["5:1"];
let rotation = 1;
let lastState = States.None;


console.log(players);
context.font = "30px Arial";
context.textAlign = "center";
context.textBaseline = "middle";


export function setServicePositions(){
    console.log("service")
    lastState = States.Service;
    ball.setPosition(770, 900);
    for(let i = 0; i < players.length; i++){
        players[i].newPosition.x = serve[systemSelector.value][rotation][i].x;
        players[i].newPosition.y = serve[systemSelector.value][rotation][i].y;
    }
    
}

export function setReceivePositions(){
    console.log("receive")
    lastState = States.Receive;
    for(let i = 0; i < players.length; i++){
        players[i].newPosition.x = receive[systemSelector.value][rotation][i].x;
        players[i].newPosition.y = receive[systemSelector.value][rotation][i].y;
    }
    
}

export function setReleasePositions(){
    console.log("Release")
    disableBorders.checked = true;
    for(let i = 0; i < players.length; i++){
        players[i].newPosition.x = release[systemSelector.value][lastState][rotation][i].x;
        players[i].newPosition.y = release[systemSelector.value][lastState][rotation][i].y;
    }
    
}

export function setDefenseLeftPositions(){
    console.log("Defense left")
    disableBorders.checked = true;
    ball.setPosition(130, -30);
    for(let i = 0; i < players.length; i++){
        players[i].newPosition.x = defense["left"][systemSelector.value][lastState][rotation][i].x;
        players[i].newPosition.y = defense["left"][systemSelector.value][lastState][rotation][i].y;
    }
}

export function prevRotation(){
    players.unshift(players.pop());
    setNewPosition();
    console.log("prev rotation");
    rotation = rotation % 6 + 1;
}
export function reset(){
    disableBorders.checked = false;
    setNewPosition();
    console.log("reset");
}
export function nextRotation(){
    players.push(players.shift());
    setNewPosition();
    console.log("next rotation");
    rotation = (rotation+6-2)%6+1;
}



function setNewPosition(){
    lastState = States.None;
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

function drawBorder(ctx, borderLeft, borderRight, borderTop, borderBottom){
    ctx.strokeStyle = "red";

    ctx.beginPath();

    // left line
    ctx.moveTo(borderLeft, borderTop);
    ctx.lineTo(borderRight, borderTop);
    
    // top line
    ctx.moveTo(borderLeft, borderTop);
    ctx.lineTo(borderLeft, borderBottom);

    // right line
    ctx.moveTo(borderRight, borderTop);
    ctx.lineTo(borderRight, borderBottom);

    //bottom line
    ctx.moveTo(borderLeft, borderBottom);
    ctx.lineTo(borderRight, borderBottom);

    ctx.stroke();
}

function writeSettings(){
    //document.getElementById("system").textContent = systemSelector.value;
    document.getElementById("mode").textContent = lastState;
    document.getElementById("rotation").textContent = rotation;
}

/**
 * 
 * @param {*} ctx 
 */
function drawField(ctx){
    ctx.fillStyle = "white";
    ctx.fillRect(-radius*2, -radius*2, ctx.canvas.width+radius*4, ctx.canvas.height+radius*4);
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, ctx.canvas.height/3);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height/3);

    ctx.moveTo(-radius, 0);
    ctx.lineTo(ctx.canvas.width+radius, 0);

    ctx.moveTo(0, 0);
    ctx.lineTo(0, ctx.canvas.height);

    ctx.moveTo(ctx.canvas.width, 0);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height);

    ctx.moveTo(0, ctx.canvas.height);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height);

    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText("Net", ctx.canvas.width/2, -radius);
}

setNewPosition();
function draw(time){
    // draws white rect over whole screen to clean it
    drawField(context);
    writeSettings();

    ball.move(mouse);
    ball.draw(context, time);

    if(global.selectedPlayer != null){
        let posX = mouse.x;
        let posY = mouse.y;
        
        const index = players.findIndex((e) => e == global.selectedPlayer);
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
            posX = Math.min(borderRight-radius, Math.max(borderLeft+radius, posX));
            posY = Math.min(borderBottom-radius, Math.max(borderTop+radius, posY));
            drawBorder(context, borderLeft, borderRight, borderTop, borderBottom);
        }
        posX = Math.min(canvas.width+radius, Math.max(0-radius, posX));
        posY = Math.min(canvas.height+radius, Math.max(0-radius, posY));
            
        global.selectedPlayer.currentPosition.x = posX;
        global.selectedPlayer.currentPosition.y = posY;
        global.selectedPlayer.newPosition.x = posX;
        global.selectedPlayer.newPosition.y = posY;
            
    }
    for(let i = 0; i < players.length; i++){
        players[i].move(parseInt((speed.value)? speed.value : 8));
        players[i].draw(context);
        // resets the color after being drawn
        players[i].color = "black";
    }
    
    window.requestAnimationFrame(draw);
}

draw();
