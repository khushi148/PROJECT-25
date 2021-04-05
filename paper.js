class Paper{

    constructor(){

        var options={
            restitution:0.2,
            density:1.2
        }

        this.body=Bodies.circle(200,660,15,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);

    }

    display(){

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40)

    }
}

