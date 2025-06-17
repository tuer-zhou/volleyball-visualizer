import { mouse } from "./input.js";
import { prevRotation,canvas, context, players, radius, nextRotation, setServicePositions, setReceivePositions, setReleasePositions, reset } from "./index.js";
import { global } from "./global.js";
import { disableBorders } from "./buttons.js";

/////////////////////////////////////////////////////////
//
// Mouse
//
/////////////////////////////////////////////////////////

export function mouseDownHandler(e){
    mouse.pressed = true;
    console.log(mouse.x + ": " + mouse.y);
    if(global.selectedPlayer != null){
        global.selectedPlayer = null;
        return;
    }
    for(let player of players){
        if((player.currentPosition.x-mouse.x) ** 2 + (player.currentPosition.y - mouse.y)**2 <= radius ** 2){
            console.log(player);
            global.selectedPlayer = player;
            return;
        }
    }
    global.selectedPlayer = null;
}

export function mouseUpHandler(e){
    mouse.pressed = false;
    global.selectedPlayer = null;
    let s = "";
    for(let player of players){
        s += "{x:"+player.currentPosition.x+", y:"+player.currentPosition.y+"},\n";
    }
    console.log(s);
    console.log("Rotation: " + rotation);
}

export function mouseMoveHandler(e){
    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;
    let posX = (e.clientX - rect.left) * scaleX ;
    let posY = (e.clientY - rect.top) * scaleY;

    let imatrix = context.getTransform().invertSelf();
    mouse.x = posX * imatrix.a + posY * imatrix.c + imatrix.e;
    mouse.y = posX * imatrix.b + posY * imatrix.d + imatrix.f;
}

/////////////////////////////////////////////////////////
//
// Keyboard
//
/////////////////////////////////////////////////////////

export function keyPressHandler(e){
    console.log(e.code);
    if(e.code == "ArrowRight" || e.code == "KeyD"){
        nextRotation();
    }else if(e.code == "ArrowLeft" || e.code == "KeyA"){
        prevRotation();
    }else if(e.code == "KeyR"){
        reset();
    }else if(e.code == "KeyW" || e.code == "ArrowUp"){
        setServicePositions();
    }else if(e.code == "KeyS" || e.code == "ArrowDown"){
        setReceivePositions();
    }else if(e.code == "KeyQ"){
        setReleasePositions();
    }else if(e.code == "KeyB"){
        disableBorders.checked = !disableBorders.checked;
    }
}
/////////////////////////////////////////////////////////
//
// Touch
//
/////////////////////////////////////////////////////////
export function touchStartHandler(e){
    for(let touch of e.changedTouches){
        //mouseDownHandler(touch);
        new MouseEvent("mousedown", {
            clientX:touch.clientX,
            clientY:touch.clientY
        });
        break;
    }
}

export function touchEndHandler(e){
    for(let touch of e.changedTouches){
        //mouseUpHandler(touch);
        new MouseEvent("mouseup", {
            clientX:touch.clientX,
            clientY:touch.clientY
        });
        break;
    }
}

export function touchMoveHandler(e){
    for(let touch of e.changedTouches){
        //mouseMoveHandler(touch);
        new MouseEvent("mousemove", {
            clientX:touch.clientX,
            clientY:touch.clientY
        });
        break;
    }
}