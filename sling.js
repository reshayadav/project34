class Sling{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
       console.log(this.offsetY);
        

    }
    display(){
     strokeWeight (4);
       var pointA= this.rope.bodyA.position;
       var pointB= this.rope.bodyB.position;

    line (pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
    
    
}
}