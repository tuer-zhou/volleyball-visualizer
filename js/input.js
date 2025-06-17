import { canvas, prevRotation, reset, nextRotation, setServicePositions, setReceivePositions, setReleasePositions } from "./index.js";

export let mouse = {
    x:0,
    y:0,
    pressed:false
}

document.addEventListener("mousemove", mouseMoveHandler);
function mouseMoveHandler(e){
    mouse.x = e.clientX - canvas.offsetLeft;
    mouse.y = e.clientY - canvas.offsetTop;
}

document.getElementById("prevBtn").onclick = prevRotation;


document.getElementById("reset").onclick = reset;


document.getElementById("nextBtn").onclick = nextRotation;

document.getElementById("service").onclick = setServicePositions;

document.getElementById("receive").onclick = setReceivePositions;

document.getElementById("release").onclick = setReleasePositions;
