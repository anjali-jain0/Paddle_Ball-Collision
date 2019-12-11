let array = []; 
let x = 20, y = 70;
let x2 = 300; x3 = 300; y3 = 400;
let dx3 = 4; let dy3 = 4;
let scr=0;
let cond = 0;

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
c.width = window.innerWidth*0.68;
c.height = window.innerHeight*0.92;

function Rect(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.draw = function(){
		ctx.beginPath();
		ctx.fillStyle = "#9DDAD2";
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
}

for (let i = 0; i < 40; i++){
  let w = 70; 
  let h = 30;
  if (x + 70 > c.width){
  	  y += 40;
  	  x = 20;
  }
  array.push(new Rect(x, y, w, h));
  x += 90;
}

		
window.addEventListener("keyup", function(event){
	if (event.keyCode == "37"){
		dx2 = -120;
		x2 += dx2;
	}
	else if (event.keyCode == "39"){
		dx2 = 120;
		x2 += dx2;
	}
});

animate();

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	ctx.font = "25px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("Score: " + scr, 400, 35);
	for (let j = 0; j < array.length; j++){
		array[j].draw();
		cond = x3 + 10 >= array[j].x && x3 - 10 <= array[j].x + array[j].w && y3 - array[j].y <= 40 && array[j].w > 0
		if (cond){
			array[j].w = 0;
			scr++;
	        dy3 = -dy3;
		}
	}
	ctx.beginPath();
	ctx.fillStyle = "#FF9A98";
	ctx.fillRect(x2, c.height-20, 200, 20);
    ctx.beginPath();
	ctx.arc(x3, y3, 10, 0, 2*Math.PI);
	ctx.fillStyle = "#048D79";
	ctx.fill();
	if (x3 + 20 > c.width || x3 < 20)
		dx3 = -dx3;
	if (y3 < 70)
		dy3 = -dy3;
	if (y3 + 30 > c.height){
		if (x3 + 10 >= x2 && x3 - 10 <= x2 + 200)
			dy3=-dy3;
		else if (y3 > c.height - 20)
			gameOver();
	}
	x3 += dx3;
	y3 += dy3;
}

function gameOver(){
    document.getElementById('endBox').style.display = 'block';
	document.getElementById('gamePage').style.opacity = '0.2';
	document.getElementById('score').innerHTML = scr ; 
}