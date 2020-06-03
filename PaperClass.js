
class Paper {
constructor(x, y,radius) {
    var options = { 
      'isStatic' : false,
      'restitution':0.3,
      'friction':0.5,
      'density':0.65
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.width = 50;
    this.height = 50;
    this.radius = 50
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
   // pos.x = mouseX;
    //pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    ellipse(0, 0, this.radius);
    pop();
  }
};
