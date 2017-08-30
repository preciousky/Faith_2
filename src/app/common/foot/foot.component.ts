import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'common-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  forUsers() {
      this.router.navigate(['/declaration', 'forUsers'], { replaceUrl: false });
  }
  forPrivacy() {
    this.router.navigate(['/declaration', 'forPrivacy'], { replaceUrl: false });
  }
  forDanger() {
    this.router.navigate(['/declaration', 'forDanger'], { replaceUrl: false });
  }
  forOurTeam() {
    this.router.navigate(['/declaration', 'forOurTeam'], { replaceUrl: false });
  }
}
