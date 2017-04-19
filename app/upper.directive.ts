

import { Directive, ElementRef,Renderer} from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(private elem:ElementRef,private render:Renderer) {                
              render.setElementStyle(elem.nativeElement,"text-transform","uppercase");
  }
  

}
