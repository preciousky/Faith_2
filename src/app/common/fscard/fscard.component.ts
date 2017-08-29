import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface SmallCard {
  name: string;
  id: number;
  info: string;
}
@Component({
  selector: 'fscard',
  templateUrl: './fscard.component.html',
  styleUrls: ['./fscard.component.scss']
})
export class FscardComponent implements OnInit {
  @Input() fCardList: Array<SmallCard> = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  private goDetails(fundId: number): void {
    this.router.navigate(['/details', fundId]);
  }
}
