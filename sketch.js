let cor;

let circuloX; // horizontal



let circuloY; // vertical



function setup() {
  
  
  
 createCanvas(400, 400);
  
  
 background(color(10,100, 90));
                
  
                
  
  
  
       cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  circuloX = [0, 0, 0];
  
  
  
  circuloY = [random(height), random(height), random(height)];
  
}


function draw() {
  
  
  
  
  fill(cor);
  
  for(let numeral in circuloX) {
    
    
       circle(circuloX[numeral], circuloY[numeral], 50);  
    
    
  circuloX[numeral]+= random(0,3);
    
    circuloY[numeral]+= random(-3,3); 
    
      if(circuloX[numeral] >= width){
      
    circuloX[numeral] = 0;
      
      circuloY[numeral] = random(height);
      
    }  
    
       
    
  }
  
  if(mouseIsPressed){   cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
                     
                     
                     
  }
}
