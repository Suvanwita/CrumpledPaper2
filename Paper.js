class Paper extends BaseClass{
    constructor(x,y,width,height) {
      super(x,y,width,height)
      var options = {
          restitution:0.04,
          density:1.2
      }
      
      this.image=loadImage("paper.png");
     
    }
  } 