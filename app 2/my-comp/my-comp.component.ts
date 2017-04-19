import { Component, OnInit, Input,ViewEncapsulation,ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styles:['.app1{border:2px groove green;width:50%; margin:0 auto }'],
  encapsulation:ViewEncapsulation.Native,
  // changeDetection:ChangeDetectionStrategy.OnPush

})
export class MyCompComponent implements OnInit {

  @Input('arrayIn') arrayInput:string[];
public ccolor:string;
  constructor() { 
        this.arrayInput=[];
      }

  ngOnInit() {
     
  }
  catchcolor(eve){
    this.ccolor=eve;
  }

}
