import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class HttpPostService {

  constructor(public http: Http) { }
  getReponseData(url: string, body: any) {
    const headers = new Headers({'Content-Type': 'application/json'}); // 其实不表明 json 也可以, ng 默认好像是 json
    const options = new RequestOptions({headers: headers});
    console.log('request:');
    console.log(body);
    return this.http.post(url, body, options);
  }
}
