  class Rain{
    constructor(x,y,w,h){
    this.w=15
    this.h=15
    this.body=Matter.Bodies.circle(x,y,this.w,{
    isStatic:false,
    restitution:0.3,
    friction:0.1,
    density:1.2
    })
    Matter.World.add(world,this.body)
    this.img=loadImage("drop.png")
        }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    imageMode(CENTER) 
    image(this.img,0,0,this.w,this.h) 
    pop()
   
    }
    }
    
    