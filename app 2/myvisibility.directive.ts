import { Directive,Input,Renderer,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[Myvisibility]'
})
export class MyvisibilityDirective  implements OnInit{

@Input() Myvisibility:boolean;
  constructor(private renderer:Renderer,private elementref:ElementRef) {
  
   }

  ngOnInit(){
    if(this.Myvisibility){
        this.renderer.setElementStyle(this.elementref.nativeElement,"display","block");
    }
    else{
 this.renderer.setElementStyle(this.elementref.nativeElement,"display","none");
    }

  }

}
