import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  con=false
  title = 'blog'
  display:number=0
  getVal(){
     return "Hemanth!"   
  }
  getName(name:any){   //  getName(name:string | number){ 
  //  alert(name)
    console.log(name)
  }
  getInc(){
    this.display+=1
    
    // this.getDis(this.display)
  }
  getDec(){
    this.display-=1
    
    // this.getDis(this.display)
  }
  getDis(a:number){
    this.display=a
  }
  num=10
}


