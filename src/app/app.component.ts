import { style } from '@angular/animations';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  con='blue'
  title = 'blog'
  color1='blue'
  color2='red'
  togg=true
  userData:any={}
  users=['Anil','Sony','Sam','Hemanth']
  userDetails=[
    {name:'Hemanth',No:'30431',accounts:['facebook','linkdin','insta','twitter','telegram']},
    {name:'Varun',No:'30432',accounts:['facebook','Yahoo','Gmail','youTube']},
    {name:'Babblu',No:'30433',accounts:['linkdin','Insta','WhatsUp']}
  ]
  display:number=0
  changeColor(){
    this.color1='blue'
  }
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

  getData(b:NgForm){
    this.userData=b
    
    console.log(this.userData.user)
    
  }

  toggle(){
    this.togg=!this.togg;
  }

  num=10
}


