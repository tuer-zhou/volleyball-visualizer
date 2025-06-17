export class Ball{
    constructor(radius){
        this.radius = radius;
        this.position = {x:0, y:0};
        this.selected = false;
    }

    draw(ctx, frames){
        ctx.beginPath();
        //ctx.moveTo(this.position.x, this.position.y);
        ctx.fillStyle = "yellow";
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle="black";
        ctx.closePath();
        ctx.stroke();
        
        ctx.strokeStyle="blue";
        ctx.lineWidth = 5;
        let offset = frames / 10000;
        let slices = 6;
        let sector = 2*Math.PI/slices;
        for(let i = 0; i <= 6; i+=2){
            let x = this.radius * Math.cos(sector * (i+offset));
            let y = this.radius * Math.sin(sector * (i+offset));

            ctx.beginPath();
            ctx.moveTo(this.position.x, this.position.y);
            ctx.bezierCurveTo(
                this.position.x+this.radius/5*3 * Math.cos(sector * (i+1+offset)),this.position.y+this.radius/5*3 * Math.sin(sector * (i+1+offset)),
                this.position.x+this.radius/3*2 * Math.cos(sector * (i-1+offset)),this.position.y+this.radius/3*2 * Math.sin(sector * (i-1+offset)),
                this.position.x+x,this.position.y+y
            );
            //ctx.arc(this.position.x, this.position.y, this.radius-5, (2 * Math.PI/6) * i+frames/1000, (2 * Math.PI/6) * i +frames/1000);
            ctx.stroke();
        }
        ctx.lineWidth = 1;
        
        
        

        
    }

    move(mouse){
        if(mouse.pressed & (this.position.x - mouse.x)**2+(this.position.y - mouse.y)**2 <= this.radius**2){
            this.selected = true;
        }
        if(!mouse.pressed){
            this.selected = false;
            //console.log("ball:" + this.position.x + ": "+this.position.y);
        }
        if(this.selected){
            this.position.x = mouse.x;
            this.position.y = mouse.y;
        }
    }

    setPosition(x, y){
        this.position.x = x;
        this.position.y = y;
    }
}