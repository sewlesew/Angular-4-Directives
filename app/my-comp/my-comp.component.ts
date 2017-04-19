import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',

  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  @Input('arrayIn') arrayInput:string[];

  constructor() { 
        this.arrayInput=[];
      }

  ngOnInit() {
     
  }

}
