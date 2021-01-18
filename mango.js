class Mango{
    constructor(x,y,radius){
       var options={
        'isStatic':true,
        'restitution':0.8,
        'friction' : 0.3,
        'density':1.2,
       }
 
       this.body=Bodies.circle(x,y,radius,options);
       this.radius=radius;
       this.image=loadImage("mango.png");
       World.add(world,this.body);
    }
 
    display(){
 
        push();
        var pos=this.body.position;
        var angle=this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");     
        imageMode(CENTER);
       //ellipseMode(CENTER)
        image(this.image,0,0,this.radius,this.radius);
       //ellipse(0,0,this.radius);
        pop();
    }
 }