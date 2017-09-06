import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

interface ForumCard {
  id: number;
  title?: string;
  info?: string;
  date?: any;
  from?: any;
  star?: any;
}
@Component({
  selector: 'forum-card',
  templateUrl: './forum-card.component.html',
  styleUrls: ['./forum-card.component.scss']
})
export class ForumCardComponent implements OnInit {
  @Input() fNewList: Array<ForumCard>;
  // @Input() routeURL: string;
  constructor( private router: Router) { }

  ngOnInit() {
    // this.routeURL = '';
  }

  todetails(id: number) {
    this.router.navigate(['/forumDetails', id]);
  }


}
