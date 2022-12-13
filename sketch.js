var diam1=0;

function setup() {
    createCanvas (500,500);
    background("#003366");
}

function draw() {
    
     fill ("#add8e6");
     stroke ("#ffff00");
     strokeWeight (20);
     ellipse (50,100,diam1,diam1);
     diam1=diam1+5;
    fill ("#add8e6");
    //the foundations
    
    ellipse(random(width),random(height),20,20);
    textSize(20);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("           Bread is Good",40,40);
    //not sure why without the spaces the B and r could not be seen
    console.log(diam1);
    //for the random circles
}

function mousePressed(){
    //this one is just fun to click
    if(diam1>50){
        diam1=0;
    }else{
        diam1=diam1+5;
    }
    
    
}