
import { Directive,ElementRef,Renderer,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  
 private colors:string[];
  constructor(private elementref:ElementRef,private renderer:Renderer) {
    this.colors=['#ff3333',' #3333cc','#009900',' #660066','#996600','#ff33cc','#00ffff'];
    renderer.setElementStyle(elementref.nativeElement,'font-size','22px');
   }
   @HostListener('click') clicked(){    
      var color=this.colors[Math.floor(Math.random()*7)];
      this.renderer.setElementStyle(this.elementref.nativeElement,'color',color);     
   };

  

}
