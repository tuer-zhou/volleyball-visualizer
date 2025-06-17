export class Ball{
    constructor(radius){
        this.radius = radius;
        this.position = {x:0, y:0};
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.strokeStyle="black";
        ctx.stroke();
    }

    newPosition(mouse){
        this.position.x = mouse.x;
        this.position.y = mouse.y;
    }
}