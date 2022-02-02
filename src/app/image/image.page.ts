import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {

  constructor() { }
  faArrowLeft = faArrowLeft;
  faCoins = faCoins;
  ngOnInit() {
  }

}
