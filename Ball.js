class Ball{
    constructor(x,y,radius){
        var options={
            'friction':1,
            'density':1,
            'restitution':0.6
        }

        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image=loadImage("Picture/TennisBall.png");
        this.body=Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);

    }

    display(){
        push ();
        translate (this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop ();

    }
}
