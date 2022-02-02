import { Component, OnInit } from '@angular/core';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faCamera, faCoins} from '@fortawesome/free-solid-svg-icons';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-engagements',
  templateUrl: './engagements.page.html',
  styleUrls: ['./engagements.page.scss'],
})
export class EngagementsPage implements OnInit {
  value:any;

  segmentChanged(ev:any){
    console.log(this.value);
  }

  constructor(public router:Router) { }
  faArrowLeft = faArrowLeft;
  faCamera = faCamera;
  faCoins = faCoins;
  faComment = faComment;

  ngOnInit() {
  }

  imagePage(){
    this.router.navigateByUrl('/image')
  }
}
