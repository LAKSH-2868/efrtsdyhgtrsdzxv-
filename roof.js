class Roof{
    constructor(x,y){
      var setting = {
          'density':100
      } 
      this.width = 500;
      this.height = 40;
      this.body = Bodies.rectangle(x,y,500,40,setting);
      World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
            
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
} 