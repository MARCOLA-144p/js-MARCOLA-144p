function setup() {
    createCanvas(600, 600);
    background("purple");
  }
  
  function draw() {
    stroke("gray");
    fill("black");
  
    // console.log(mouseIsPressed)
   
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 50, 50);
    }
  }