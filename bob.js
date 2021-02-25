class Bob{
    constructor(x,y){
        var option = {
         'density':3,
            'friction': 0,
            'restitution':0  
        }
        this.body = Bodies.circle(x,y,50+10);
        this.radius = 50+10;
        World.add(world,this.body);
    }
        display(){        
            var pos = this.body.position;
            
            push();
            translate(pos.x,pos.y);
            ellipseMode(CENTER);
            ellipse(0,0,this.radius);
            pop();
        }
}