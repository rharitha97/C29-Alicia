class SlingShot{
    constructor(bodyA, pointB){
        var option = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.02,
            length:15
        }
        this.pointB = pointB;
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.sling = Constraint.create(option);
        World.add(world, this.sling); 
    }
    display(){
        image(this.sling1, 200,20);
        image(this.sling2, 170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            stroke(49, 20, 10)
            if(pointA.x < 200){
            strokeWeight(5);
            line(pointA.x, pointA.y, this.pointB.x, pointB.y)
            }
            
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
}