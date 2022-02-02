import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBullhorn, faCoins, faFileUpload, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor( public router:Router) { }
  faShoppingCart = faShoppingCart;
  faBell = faBell;
  faCoins = faCoins;
  faFileUplod = faFileUpload;
  bullHorn = faBullhorn
  ngOnInit(): void {
  }
engagement(){
  this.router.navigateByUrl('/engagements')
}
}
