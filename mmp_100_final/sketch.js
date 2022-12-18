let MMP_100_finalImage;

function preload(){
 MMP_100_finalImage = loadImage("MMP_100_final.jpg");
}

function setup() {
  createCanvas(500,500);
}

function draw() {
 //body
  background(220);
  image(MMP_100_finalImage, 0, 0, 500,500)
  push();
  translate(mouseX-200,mouseY-200);
  fill(0, 128, 0);
  rect(135, 200, 130,270,);
  fill(0, 128, 0);
  rect(160, 200, 80,200);
    console.log(mouseX + ', ' + mouseY);
   //face
  fill(19, 136, 8);
  ellipse (200,155,100,100);
  fill(255);
  ellipse(175,159,40,30);
  ellipse(225,159,40,30);
  fill(0,0,0);
   ellipse(175,159,4,3);
  ellipse(225,159,4,3);
  
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
  fill(34, 139, 34);
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
  //arms
  beginShape();
curveVertex(135,201);
  curveVertex(135,201);
curveVertex(60,294);
  curveVertex(60,294);
curveVertex(134,240);
curveVertex(131,226);
  endShape();
  
  beginShape();
  curveVertex(264,200);
  curveVertex(264,200);
curveVertex(318,280);
  curveVertex(318,280);
curveVertex(264,236);
  curveVertex(264,236);
  endShape();
pop();
}

  