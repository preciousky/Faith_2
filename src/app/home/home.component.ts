import { Component, OnInit } from '@angular/core';

interface ShowCard {
  name: String;
  id: number;
  src: String;
  info: String;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  picList: Array<Object>;
  fCardList: Array<ShowCard>;
  count: Array<any>;
  constructor() {
    this.picList = [
      { src: './assets/pic/index_road.jpg', title: '' },
      { src: './assets/pic/index_friends.jpg', title: '' },
      { src: './assets/pic/index_people.jpg', title: '' },
      { src: './assets/pic/index-sea.jpg', title: '' },
    ];
    this.fCardList = [
      // tslint:disable-next-line:max-line-length
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
    ];
  }

  ngOnInit() {
  }

  getRecoFund() {
    // set fCardList
  }

}
