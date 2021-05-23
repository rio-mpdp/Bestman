class Umbrella {
    constructor(x,y){
        this.w=15
    this.h=15
        var options = {
            isStatic: true,
        }
      
        this.image2 = loadImage("h.gif");
        this.image=loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png")
        this.umbrella = Bodies.circle(x,y,60,options);
        this.radius = 60;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        if(frameCount<=200)
        animation(this.image,200,400,50,50);
        
       if(frameCount>=200){
           image(this.image2,250,500,400,400)
         

       }
        
    }
}
