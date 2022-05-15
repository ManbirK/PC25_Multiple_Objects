class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(my_world, this.body);
  }
  
show(){
  //creating a variable for position array
 var pos= this.body.position;
 // Calling Rotate function for object of the class
 Matter.Body.rotate(this.body, angle);

 //pushing specific properties
 push();

   rectMode(CENTER);
   stroke(225);
    fill(127);
// translating the positions
   translate(pos.x, pos.y);
   rotate(angle);
   rect(0,0, this.w,this.h);
 pop();
 // increasing the angle 
 angle += 0.1;

}
 
   
}
