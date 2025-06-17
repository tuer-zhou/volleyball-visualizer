import { radius } from "./index.js";

export class Player {
    constructor(name){
        this.name = name;
        this.currentPosition = {x:0, y:0};
        this.newPosition = {x:0, y:0};
        this.color = "black";
    }

    move(steps){
        let v = {
            x:this.newPosition.x-this.currentPosition.x, 
            y:this.newPosition.y - this.currentPosition.y
        };
        const mag = Math.sqrt((v.x)**2+(v.y)**2)
        v.x = v.x/mag;
        v.y = v.y/mag;
        if(this.newPosition.x - steps <= this.currentPosition.x && this.currentPosition.x <= this.newPosition.x + steps){
            this.currentPosition.x = this.newPosition.x;
        }else{
            this.currentPosition.x += v.x*steps;
        }

        if(this.newPosition.y - steps <= this.currentPosition.y && this.currentPosition.y <= this.newPosition.y + steps){
            this.currentPosition.y = this.newPosition.y;
        }else{
            this.currentPosition.y += v.y * steps;
        }
    }

    setNewPosition(x, y){
        this.newPosition.x = x;
        this.newPosition.y = y; 
    }

    draw(ctx){
        ctx.strokeStyle = this.color;
        ctx.fillStyle = "black";
        ctx.fillText(this.name, this.currentPosition.x, this.currentPosition.y);
        ctx.beginPath();
        ctx.arc(this.currentPosition.x, this.currentPosition.y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

}