class Rock{
    constructor(x,y,width,height){
      var options={
          'restitution':0.03,
          'friction':5,
          'density':1
      }

      
      this.width=width;
    this.height=height;
    this.image=loadImage("Picture/Rock-1.png");
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);

    }

    
    display(){

        push ();

        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        
        pop ();

    }
}
