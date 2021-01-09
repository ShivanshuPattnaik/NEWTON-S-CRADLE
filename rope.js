class Rope{

    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        var options = {

            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x : this.offsetX, y : this.offsetY}

        }

        this.rope = Constraint.create(options);

        World.add(world, this.rope);

    }

    display(){

        var bA = this.rope.bodyA.position;
        var bB = this.rope.bodyB.position;
        stroke("black")
        strokeWeight(2);
        line(bA.x, bA.y, bB.x + this.offsetX, bB.y + this.offsetY);

    }

}