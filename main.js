var currentX,currentY,lastX,lastY;
var color="black";
var lineWidth=1;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var width=screen.width;
var newWidth =screen.width-70;
var newHeight=screen.height-300;

if(width<992){
    document.getElementById("myCanvas").width=newWidth;
    document.getElementById("myCanvas").width=newHeight;
    document.body.style.overflow="hidden";

}

canvas.addEventListener("touchstart",touchstart);

function touchstart(e){
    console.log("touchstart");
    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",touchmove);

function touchmove(e){
    console.log("touchmove");
    currentX=e.touches[0].clientX-canvas.offsetLeft;
    currentY=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=lineWidth;
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();

    lastX=currentX;
    lastY=currentY;
}
