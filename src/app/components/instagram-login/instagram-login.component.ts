import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Constants} from '../../commons/constants';

@Component({
  selector: 'app-instagram-login',
  templateUrl: './instagram-login.component.html',
  styleUrls: ['./instagram-login.component.css']
})
export class InstagramLoginComponent implements OnInit {

  OAUTH_AUTHORIZE_URL = 'https://api.instagram.com/oauth/authorize/';
  CLIENT_ID_PARAMETER = 'client_id=' + Constants.CLIENT_ID;
  REDIRECT_URI_PARAMETER = 'redirect_uri=' + Constants.REDIRECT_URI;
  RESPONSE_TYPE_PARAMETER = 'response_type=code';
  SCOPE_PARAMETER = 'scope=public_content';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  login() {
    window.location.href = this.OAUTH_AUTHORIZE_URL +
                            '?' + this.CLIENT_ID_PARAMETER +
                            '&' + this.REDIRECT_URI_PARAMETER +
                            '&' + this.RESPONSE_TYPE_PARAMETER +
                            '&' + this.SCOPE_PARAMETER;
  }
}
