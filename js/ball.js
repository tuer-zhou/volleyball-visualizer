export class Ball{
    constructor(radius){
        this.radius = radius;
        this.position = {x:0, y:0};
    }

    draw(ctx){
        ctx.beginPath();
        //ctx.moveTo(this.position.x, this.position.y);
        ctx.fillStyle = "yellow";
        for(let i = 0; i < 6; i+=2){
            ctx.arc(this.position.x, this.position.y, this.radius, (2 * Math.PI/6) * i, (2 * Math.PI/6) * (i+1));
            ctx.fill();
        }

        
        
        ctx.strokeStyle="black";
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = "blue";
        for(let i = 1; i < 6; i+=2){
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, this.radius, (2 * Math.PI/6) * i, (2 * Math.PI/6) * (i+1));
            ctx.fill();
            ctx.stroke();
        }
        
    }

    newPosition(mouse){
        this.position.x = mouse.x;
        this.position.y = mouse.y;
    }
}