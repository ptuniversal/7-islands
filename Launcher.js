class Launcher{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.05, 
			length:2
			
		}
		
		this.bodyA=body
		this.pointB=anchor;
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA = null;	
	}
		

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(3);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}



























/*class Sling{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:15
        }

        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world, this.sling);

    }

    display(){
        
        push ();
        pop ();
    }  
}*/





/*if(this.sling.bodyA){
    var bodyA=this.bodyA.position;
    var pointB=this.pointB;

    strokeWeight(3);
    line (bodyA.x,bodyA.y,pointB.x,pointB.y)
}
}*/