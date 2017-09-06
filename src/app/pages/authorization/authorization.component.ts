import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, Routes} from '@angular/router';
import {Utils} from '../../commons/utils';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  CODE_API_URL = 'http://localhost:3000/auth/authorize';

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    const code = Utils.getParameterByName(null, 'code');
    console.log('code=' + code);

    const body = {
      code: code
    };

    const headers: any = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.post(this.CODE_API_URL, body, { headers: headers})
      .subscribe(data => {
        console.log('data=' + JSON.stringify(data));
        this.router.navigate(['/profile']);
      },
      err => {
        console.log('err=' + JSON.stringify(err));
      });
  }

}
