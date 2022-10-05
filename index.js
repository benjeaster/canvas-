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

var y = 100;
var x = canvas.width/2;
var radius = 40;
var dx = 4;
var dy = 4;
const colors = ['red','green','blue', 'orange', 'pink'];
var color = colors[0];
function animateCircle()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
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
    x+=dx;
    requestAnimationFrame(animateCircle);
}

animateCircle();