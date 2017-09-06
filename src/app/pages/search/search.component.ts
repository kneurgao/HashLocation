import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  USERS_SELF_API_URL = 'http://localhost:3000/users/self';
  USERS_SELF_MEDIA_RECENT_API_URL = 'http://localhost:3000/users/self/media/recent';
  USERS_SELF_MEDIA_LIKED_API_URL = 'http://localhost:3000/users/self/media/liked';

  full_name: string;
  profile_picture: string;
  recent_media: string[];
  liked_media: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers: any = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.get(this.USERS_SELF_API_URL, { headers: headers})
      .subscribe(data => {
          console.log('data=' + JSON.stringify(data));
          this.full_name = data['data']['full_name'];
          this.profile_picture = data['data']['profile_picture'];
        },
        err => {
          console.log('err=' + JSON.stringify(err));
        });

    this.http.get(this.USERS_SELF_MEDIA_RECENT_API_URL, { headers: headers})
      .subscribe(data => {
          console.log('data=' + JSON.stringify(data));

          const recent_media = [];
          data['data'].forEach(function (element) {
            const media = element;
            recent_media.push(media['images']['thumbnail']['url']);
          });
          this.recent_media = recent_media;
        },
        err => {
          console.log('err=' + JSON.stringify(err));
        });

    this.http.get(this.USERS_SELF_MEDIA_LIKED_API_URL, { headers: headers})
      .subscribe(data => {
          console.log('data=' + JSON.stringify(data));

          const liked_media = [];
          data['data'].forEach(function (element) {
            const media = element;
            liked_media.push(media['images']['thumbnail']['url']);
          });
          this.liked_media = liked_media;
        },
        err => {
          console.log('err=' + JSON.stringify(err));
        });
  }

}
