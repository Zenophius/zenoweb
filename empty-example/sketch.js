
var run;
var rise;
var hyp;
var angle;



function setup() {
  createCanvas(1920,1000);
}

function draw() {
  run = width/2 - mouseX;
  rise = height/2 - mouseY;
  hyp = Math.sqrt((run*run)+(rise*rise));
  angle = degrees(asin((rise/hyp)));
  background(50);
  fill(255);
  ellipse(width/2,height/2,hyp*2,hyp*2);
  strokeWeight(5);
  line(width/2,height/2, mouseX, height/2);
  line(width/2,height/2, mouseX, mouseY);
  line(mouseX, height/2,mouseX,mouseY);
  textSize(42);
  fill(0);
  text(str(abs(Math.round(angle)))+"°",width/2,height/2);
  text(str(90-abs(Math.round(angle)))+"°",mouseX,mouseY);
  text("cos" + "(" + str(abs(Math.round(angle*1000)/1000)) + ")" + "=" + str(abs(Math.round(run*1000000 / hyp)/1000000)),width/2-run/2,height/2+42);
  text("sin" + "(" + str (90 - (abs(Math.round(angle*1000)/1000)) + ")" + "=" + str(abs(Math.round(rise*1000000 / hyp)/1000000)),mouseX,mouseY+rise/2);

}
