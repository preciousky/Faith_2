
import { Component, OnInit, Input } from '@angular/core';
interface fNew {
  id: number;
  title?: string;
  info?: string;
  date?: any;
  from?: any;
}

@Component({
  selector: 'fnew2',
  templateUrl: './fnew2.component.html',
  styleUrls: ['./fnew2.component.scss']
})



export class Fnew2Component implements OnInit {
  @Input() Article: Array<fNew>;
  constructor() { }

  ngOnInit() {
  }

}
