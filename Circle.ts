class Circle
{
     radius?:number;
     color?:string;

     constructor(radius?:number,color?:string)
     {
         this.radius = radius;
         this.color = color;

     }

     getradius():number
     {
           return this.radius;

     }

     setradius(radius:number)
     {
          this.radius = radius;

     }

     getcolor():string
     {
         return this.color;
     }

     setcolor(color:string)
     {

        this.color = color;
     }

     toString()
     {
         return this.radius +' '+ this.color;
     }

      getarea()
      {
          return this.radius * this.radius;
      }

      getcircum()
      {
          return 2*Math.PI * this.radius;
      }


}


let circle = new Circle();
let circle1 = new Circle(5);
let circle2 = new Circle(5,"blue");


(<HTMLParagraphElement>document.querySelector('#pRadius')).innerHTML = 'Radius of Circle is : ' + circle2.getradius().toString();
(<HTMLParagraphElement>document.querySelector('#pColor')).innerHTML = 'Color of Circle is : ' + circle2.getcolor().toString();
(<HTMLParagraphElement>document.querySelector('#pArea')).innerHTML = 'Area of Circle is : ' + circle2.getarea().toString();
(<HTMLParagraphElement>document.querySelector('#pCircum')).innerHTML = 'Circumference of Circle is : ' + circle2.getcircum().toString();


