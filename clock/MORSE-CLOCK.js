function setup() {
createCanvas(650, 550);
//textSize(width / 45); 
textFont('Courier New');
// font credit to JavaScript fonts
//textAlign(CENTER,CENTER);  
  
}

//create black background 
function draw() {
  background(0);
  // credit https://p5js.org/reference/#/p5/background
colorMode(HSB);
background(255, 204, 100); 

  
  //call hours, minutes, and seconds
  let hourzz = hour();
  let minutezz = minute();
  let secondzz = second();
  
  //final command on time
  fill(255);
  noStroke();
  text(hourzz + ":" + minutezz+ ":" + secondzz, 10, 200);
  
  //split hours
  firstDigit = Math.floor(hourzz/10);
   secondDigit = (hourzz%10);
   thirdDigit = Math.floor(minutezz/10);
   fourthDigit = Math.floor(minutezz%10); 
  
  
  //call the convert method
  convertToMorse(firstDigit,-25,0);
  convertToMorse(secondDigit,25, 0);
  convertToMorse(thirdDigit,-25, 50);
  convertToMorse(fourthDigit,20, 50);
  //converttoMorse(fourthDigit,25,25);
  
}

// create morse variables 
function convertToMorse( x,p,s){
  //create if morse statements 
  if (x==0){
    text("-----",width / 2 + p, height / 2 + s);
         //width / 2 + p, 0);
  }
  else if (x==1){
    text(".----", width / 2 + p, height / 2 + s);
  }
  else if (x==2){
    text("..---",width / 2 + p, height / 2 + s);
  }
  else if (x==3){
    text("...--",width / 2 + p, height / 2 + s);
  }
  else if (x==4){
    text("....-",width / 2 + p, height / 2 + s);
  }
  else if (x==5){
    text(".....",width / 2 + p, height / 2 + s);
  }
  else if (x==6){
    text("-....",width / 2 + p, height / 2 + s);  
  }
  else if (x==7){
    text("--...",width / 2 + p, height / 2 + s);
  }
  else if (x==8){
    text("---..",width / 2 + p, height / 2 + s);
  }
  else if (x==9){
     text("----.",width / 2 + p, height / 2 + s);
  }
  else {
     //empty 
  }
  
  
  
  

  
  
} 
