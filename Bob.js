class Bob{

    constructor(x,y){

        var options = {
           isStatic :  false,
            restitution : 1,
            friction : 0,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,50,options);
       // this.image = loadImage("paper.png")
        World.add(world, this.body);
    }

    display(){
        push()
        //imageMode(CENTER)
        //image(this.image,this.body.position.x, this.body.position.y, 70,70)
        fill ("pink");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y,25,25);
        pop()
        
    }
}