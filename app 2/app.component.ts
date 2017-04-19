import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'  ,
  styles:['.app1{border:1px solid red;width:80%; height:400px;margin:0 auto};',
  '.app2{width:50%;margin:0 auto; color:RED}'],
  encapsulation:ViewEncapsulation.Native

  
})
export class AppComponent {
    arr:string[]=["cs572","cs472","cs422"];
    
}
