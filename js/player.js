export class Player {
    constructor(name){
        this.name = name;
        this.currentPosition = {x:0, y:0};
        this.newPosition = {x:0, y:0};
        this.color = "black";
    }

    move(steps){
        if(this.newPosition.x - steps <= this.currentPosition.x && this.currentPosition.x <= this.newPosition.x + steps){
            this.currentPosition.x = this.newPosition.x;
        }else{
            if(this.currentPosition.x < this.newPosition.x){
                this.currentPosition.x += steps;
            }else{
                this.currentPosition.x -= steps;
            }
        }

        if(this.newPosition.y - steps <= this.currentPosition.y && this.currentPosition.y <= this.newPosition.y + steps){
            this.currentPosition.y = this.newPosition.y;
        }else{
            if(this.currentPosition.y < this.newPosition.y){
                this.currentPosition.y += steps;
            }else{
                this.currentPosition.y -= steps;
            }
        }
    }

    setNewPosition(x, y){
        this.newPosition.x = x;
        this.newPosition.y = y; 
    }

}