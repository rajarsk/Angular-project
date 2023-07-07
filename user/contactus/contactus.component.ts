import { Component } from '@angular/core';
import { ContactusService } from 'src/app/services/contactus.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  panelOpenState = false;
  fname:any;
  lname:any;
  email:any;
  company:any;
  message:any;
  errors:string[]=[];
  constructor(private cs:ContactusService){}
  submit(){
    this.errors = []
   
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First name should be greatr than 3 characters")
    if(this.lname==undefined || this.lname.length<3)
      this.errors.push("Lastname name should be greate than 3 characters")
    if(this.email==undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")
    // if(this.company==undefined || this.company.length<3)
    //   this.errors.push("Company name should be greate than 3 characters")
    if(this.message==undefined || this.message.length<30)
      this.errors.push("Message should be greate than 30 characters")

      if(this.errors.length==0){
        let obj={
          id:Math.round(Math.random()*100000),
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          company: this.company,
          message: this.message

        }
        this.cs.postContact(obj).subscribe({
          next: ()=>{
            alert("You enquiry is posted")
            this.fname="",
            this.lname="",
            this.email="",
            this.message="",
            this.company=""
          },
          error: ()=>alert("there is a problem posting your equiry")
        }
        )
      }
  }
}


