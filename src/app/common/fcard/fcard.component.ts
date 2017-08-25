import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'fcard',
  templateUrl: './fcard.component.html',
  styleUrls: ['./fcard.component.scss']
})
export class FcardComponent implements OnInit {
  @Input() fCardList: Array<object> = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  private goDetails(): void {
    this.router.navigate(['/details']);
  }
}
