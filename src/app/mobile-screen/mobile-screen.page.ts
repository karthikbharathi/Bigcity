import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-screen',
  templateUrl: './mobile-screen.page.html',
  styleUrls: ['./mobile-screen.page.scss'],
})
export class MobileScreenPage implements OnInit {
  public otpEnter:boolean = false;
  public submitbtn:boolean = false;
  public enterBtn:boolean = true;
  constructor(public router:Router) { }
  enterOtp(){
   this.otpEnter=true;
    this.enterBtn=false;
    this.submitbtn =true;
  }
  submit(){
  this.router.navigateByUrl('/dashboard')
  }
  ngOnInit() {
  }

}
