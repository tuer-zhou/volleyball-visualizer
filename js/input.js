import { canvas,context, prevRotation, reset, nextRotation, setServicePositions, setReceivePositions, setReleasePositions, setDefenseLeftPositions } from "./index.js";

export let mouse = {
    x:0,
    y:0,
    pressed:false
}

document.addEventListener("touchmove", touchMoveHandler);

function touchMoveHandler(e){
    for(let touch of e.changedTouches){
        mouseMoveHandler(touch);
        break;
    }
}

document.addEventListener("mousemove", mouseMoveHandler);
function mouseMoveHandler(e){
    /*mouse.x = e.clientX - canvas.offsetLeft;
    mouse.y = e.clientY - canvas.offsetTop;*/

    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;
    let posX = (e.clientX - rect.left) * scaleX ;
    let posY = (e.clientY - rect.top) * scaleY;

    let imatrix = context.getTransform().invertSelf();
    mouse.x = posX * imatrix.a + posY * imatrix.c + imatrix.e;
    mouse.y = posX * imatrix.b + posY * imatrix.d + imatrix.f;
}

document.getElementById("prevBtn").onclick = prevRotation;


document.getElementById("reset").onclick = reset;


document.getElementById("nextBtn").onclick = nextRotation;

document.getElementById("service").onclick = setServicePositions;

document.getElementById("receive").onclick = setReceivePositions;

document.getElementById("release").onclick = setReleasePositions;

document.getElementById("defenseLeft").onclick = setDefenseLeftPositions;
