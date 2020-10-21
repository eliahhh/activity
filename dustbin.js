class Dustbin{

    constructor(x,y,width,height){
    
    var options={
    
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2,
    
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.x = x;
    this.y = y;
    
    this.width = width;
    this.height = height;

    World.add(world,this.body);
    
    }
    
    display(){
    
    push();
    translate(this.body.position.x,this.body.position.y);
    fill("green");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    
    }
    
    
    
    }