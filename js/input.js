import { prevRotation, reset, nextRotation, setServicePositions, setReceivePositions, setReleasePositions, setDefenseLeftPositions } from "./index.js";
import { keyPressHandler, touchStartHandler, touchEndHandler, touchMoveHandler, mouseDownHandler, mouseUpHandler, mouseMoveHandler } from "./handlers.js";


export let mouse = {
    x:0,
    y:0,
    pressed:false
}

document.addEventListener("touchmove", touchMoveHandler);



document.addEventListener("mousemove", mouseMoveHandler);


document.getElementById("prevBtn").onclick = prevRotation;


document.getElementById("reset").onclick = reset;


document.getElementById("nextBtn").onclick = nextRotation;

document.getElementById("service").onclick = setServicePositions;

document.getElementById("receive").onclick = setReceivePositions;

document.getElementById("release").onclick = setReleasePositions;

document.getElementById("defenseLeft").onclick = setDefenseLeftPositions;

document.addEventListener("keydown", keyPressHandler);
document.addEventListener("touchstart", touchStartHandler);
document.addEventListener("touchend", touchEndHandler);

document.addEventListener("mousedown", mouseDownHandler);
document.addEventListener("mouseup", mouseUpHandler);