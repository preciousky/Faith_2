import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fun-list',
  templateUrl: './fun-list.component.html',
  styleUrls: ['./fun-list.component.scss']
})
export class FunListComponent implements OnInit {
  fCardList1: Array<Object>;
  fCardList2: Array<Object>;
  tableData: Array<Object>;
  constructor(
    private actRoute: ActivatedRoute
  ) {
    this.fCardList1 = [
      // tslint:disable-next-line:max-line-length
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
    ];
    this.fCardList2 = [
      // tslint:disable-next-line:max-line-length
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
      { name: '基金名称', id: 0, src: './assets/pic/product.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.' },
    ];
    this.tableData = [];
  }

  ngOnInit() {
    this.getRouteHref();
    for (let i = 0; i < 20; i++) {
      this.tableData.push({});
    }

  }

  private getRouteHref() {
    return this.actRoute.params.subscribe(params => {
      console.log(params);
      // window.location.hash = params._name;
      this.scorllById(params._name);
    });
  }

  scorllById(_id) {
    document.getElementById(_id).scrollIntoView();
  }

}
