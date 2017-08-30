import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpPostService } from '../../service/http-post.service';
import { Observable } from 'rxjs/Observable';
interface Declaration {
  title?: string;
  update?: string;
  cont?: string;
}
@Component({
  selector: 'declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {
  declaration: Declaration;
  declarationName;
  constructor(
    private route: ActivatedRoute,
    public httpPostService: HttpPostService
  ) {
    this.declaration = {};
  }
  ngOnInit() {
    console.log('ini');
    this.route.params.subscribe(params => {
      this.declarationName = params['_id'];
    });
    const url = 'declarations/' + this.declarationName + '.json';
    // fetch the content of the declaration
    this.getDeclaration(url).subscribe(data => {
      this.declaration = data.json();
    });
    console.log(this.declaration);
  }
  getDeclaration(url: string): Observable <any> {
    console.log('ini2');
    return this.httpPostService.getReponsTestDataByGet(url);
  }
}
