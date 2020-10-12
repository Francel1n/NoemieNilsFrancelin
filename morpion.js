function setup() {
createCanvas(660, 660);
background(225);
{
fill(102);
rect(0, 210.83, 733.33, 18.33);
}
{
fill(102);
rect(0, 430.33, 733.33, 18.33);
}
{
fill(102);
rect(430.33, 0, 18.33, 733.33);
}
  {
fill(102);
rect(210.83, 0, 18.33, 733.33);
}
}
var x = 0;
function mousePressed() {
let taille = (80);
x = x+1 ;
if (x%2 == 0) {
  if (pmouseX<220 && pmouseY<220) {
    {
      fill('red');
      stroke(0); }
      strokeWeight(3);
      ellipse(110, 110, taille);
     }
  if (pmouseX<440 && pmouseX>220 && pmouseY<220){
      fill('red');
      ellipse(330, 110, taille);
     }
   if (pmouseX>440 && pmouseY<220) {
      fill('red');
      ellipse(550, 110, taille);
     }
        if (pmouseX<220 && pmouseY>220 && pmouseY<440) {
      fill('red');
      ellipse(110, 330, taille);
     }
        if (pmouseX<220 && pmouseY>440) {
      fill('red');
      ellipse(110, 550, taille);
     }
        if (pmouseX>220 && pmouseY>440 && pmouseX<440) {
      fill('red');
      ellipse(330, 550, taille);
     }
         if (pmouseX>440 && pmouseY>440) {
      fill('red');
      ellipse(550, 550, taille);
     }
         if (pmouseX>440 && pmouseY>220 && pmouseY<440) {
      fill('red');
      ellipse(550, 330, taille);
     }
         if (pmouseX>220 && pmouseY<440 && pmouseX<440) {
           if (pmouseY>220){
      fill('red');
      ellipse(330, 330, taille);
           }
     }
 }

else   {
  if (pmouseX<220 && pmouseY<220) {
      fill('blue');
      stroke(0);
      strokeWeight(3);
      square(70, 70, taille);
     }
  if (pmouseX<440 && pmouseX>220 && pmouseY<220){
      fill('blue');
      square(290, 70, taille);
     }
   if (pmouseX>440 && pmouseY<220) {
      fill('blue');
      square(510, 70, taille);
     }
        if (pmouseX<220 && pmouseY>220 && pmouseY<440) {
      fill('blue');
      square(70, 290, taille);
     }
        if (pmouseX<220 && pmouseY>440) {
      fill('blue');
      square(70, 510, taille);
     }
        if (pmouseX>220 && pmouseY>440 && pmouseX<440) {
      fill('blue');
      square(290, 510, taille);
     }
         if (pmouseX>440 && pmouseY>440) {
      fill('blue');
      square(510, 510, taille);
     }
         if (pmouseX>440 && pmouseY>220 && pmouseY<440) {
      fill('blue');
      square(510, 290, taille);
     }
         if (pmouseX>220 && pmouseY<440 && pmouseX<440) {
           if (pmouseY>220){
      fill('blue');
      square(290, 290, taille);
           }
     }
}
}
