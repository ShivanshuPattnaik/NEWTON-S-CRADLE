class Bob{

    constructor(x, y){

        var options = {

            isStatic : false,
            'restitution' : 1,
            'density' : 0.3

        }
        
        this.body = Bodies.circle(x, y, 20, options);

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill("chartreuse");
        stroke("black");
        strokeWeight(2);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();

    }

}