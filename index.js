var canvas = document.getElementsByTagName('canvas')[0];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

/*context.beginPath();

context.fillStyle = 'green';
context.fillRect(200,200,200, 200);

context.beginPath();
context.strokeStyle = 'blue';
context.moveTo(100,100);
context.lineTo(500,500);
context.lineTo(800,100);
context.stroke();*/
const colors = ['red','green','blue', 'orange', 'pink'];

class Ball{
    constructor(x,y,radius,dx,dy, color)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    draw(){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        context.fill();
    }

    update(){
        if((this.y + this.radius -10 > canvas.height) || (this.y - this.radius + 10 < 0))
        {
            this.dy = (-this.dy);
            this.color = colors[Math.floor(Math.random()*colors.length)];
        }

        if((this.x + this.radius - 10 > canvas.width) || (this.x - this.radius +10 < 0))
        {
            this.dx = (-this.dx);
            this.color = colors[Math.floor(Math.random()*colors.length)];
        }
        this.y+=this.dy;
        this.x+=this.dx;
        this.draw();
    }
}
var ballList = [];
for(var i = 0; i < 2000; i++)
{
    var x = Math.random()*canvas.width;
    var y = Math.random()*canvas.height;
    var dx = (Math.random()-0.5)*8;
    var dy = (Math.random()-0.5)*8;
    var radius = Math.random()*2;
    var color = colors[Math.floor(Math.random()*colors.length)];
    ballList.push(new Ball(x,y,radius,dx,dy,color));
}
function animateCircle()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < ballList.length; i++)
    {
        ballList[i].update();
    }
    /*context.beginPath();
    context.fillStyle = color;
    context.arc(x,y,radius,0,Math.PI * 2,false);
    context.fill();
    if((y + radius > canvas.height) || (y - radius < 0))
    {
        dy = (-dy);
        color = colors[Math.floor(Math.random()*colors.length)];
    }

    if((x + radius > canvas.width) || (x - radius < 0))
    {
        dx = (-dx);
        color = colors[Math.floor(Math.random()*colors.length)];
    }
    y+=dy;
    x+=dx;*/
    requestAnimationFrame(animateCircle);
}

animateCircle();