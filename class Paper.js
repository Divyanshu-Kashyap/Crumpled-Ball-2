class Paper {  
    constructor(){
        var options = {
            'restitution':0.6,
            'friction':1.0,
            'density':0.1,
            'isStatic' : false
        }
        
        this.body = Bodies.circle(100,345,55, options);
       
        this.image=loadImage("paper.png");
     
	    World.add(world, this.body);
       
        
   }
   display(){
       var pos=this.body.position;
    
   
    image(this.image,pos.x,pos.y,80,80);
   }




}
