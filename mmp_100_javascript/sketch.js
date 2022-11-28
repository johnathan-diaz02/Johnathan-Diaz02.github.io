function setup() {
  createCanvas(400, 400);
}

function draw() {
 //body
  background(220);
  fill(255);
  rect(135, 200, 130,270,);
  fill(102, 204, 255)
  rect(160, 200, 80,200);
    console.log(mouseX + ', ' + mouseY);
   //face
  fill(204, 204, 204);
  ellipse (200,155,100,100);
  fill(255);
  ellipse(175,159,40,30);
  ellipse(225,159,40,30);
  fill(0,0,0);
  //eyes
  x = map(mouseX, 0,width,-10,10,1);
y = map(mouseY, 0,width,-5,5,1);
  push();
translate(x ,y);
   ellipse(175,159,4,3);
  ellipse(225,159,4,3);
pop();
  
  
  
  //mouth
  beginShape();
curveVertex(182, 192);
curveVertex(185,185);
curveVertex(184,176);
curveVertex(208,183);
curveVertex(216, 191);
curveVertex(182, 192);
  curveVertex(185,185);
endShape();
  
  //hair
  fill(179, 224, 255);
  beginShape();
vertex(232, 116);
vertex(271,49);
vertex(216,78);
vertex(185, 100);
// vertex(170,110);
vertex(138, 43);
vertex(151,124);
vertex(100,100);
vertex(159,136);
vertex(198,116);
vertex(245,135);
 vertex(312,105); 
  
endShape(CLOSE);
}

