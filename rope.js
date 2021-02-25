class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        var setting = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:offsetY}
        }
        this.rope = Constraint.create(setting);
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        fill="red"
        strokeWeight(2);
        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.Y;

        var Anchor2X = pointB.x+this.offsetX;
        var Anchor2Y = pointB.y+this.offsetY;
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}
