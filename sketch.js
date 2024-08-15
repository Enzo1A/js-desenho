let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

  function setup() {
  createCanvas(400,400);
  background(100, 0, 0);
  cor= color(random(0, 255), random(0, 255), random(0, 255));          posicaoHorizontal=200;
  posicaovertical=200;
  }
 


function setup() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if (mouseX<posicaoHorizontal {
      posicaoHorizontal= posicaoHorizontal - 1;
      }

  if (mouseX>posicaoHorizontal){
    posicaoHorizontal= posicaoHorizontal + 1;
  }
  
  if(mouseX)