
import { Directive,ElementRef,Renderer,HostListener,HostBinding,Output,EventEmitter } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  
  @Output() mycolor;
 private colors:string[];
  constructor(private elementref:ElementRef,private renderer:Renderer) {
    this.colors=['#ff3333',' #3333cc','#009900',' #660066','#996600','#ff33cc','#00ffff'];
    renderer.setElementStyle(elementref.nativeElement,'font-size','22px');
    this.mycolor=new EventEmitter();
   }
   @HostListener('click') clicked(){    
      var color=this.colors[Math.floor(Math.random()*7)];
      this.renderer.setElementStyle(this.elementref.nativeElement,'color',color);  
      this.mycolor.emit(color);
         
   };

  

}
