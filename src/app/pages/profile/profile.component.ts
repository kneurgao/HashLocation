import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  USERS_SELF_API_URL = 'http://localhost:3000/users/self';
  USERS_SELF_MEDIA_RECENT_API_URL = 'http://localhost:3000/users/self/media/recent';
  USERS_SELF_MEDIA_LIKED_API_URL = 'http://localhost:3000/users/self/media/liked';

  userInfoAvailable = false;
  username: string;
  full_name: string;
  profile_picture: string;
  numOfPosts: number;
  numOfFollowers: number;
  numOfFollowing: number;

  recentMediaAvailable = false;
  recent_media: any[];

  likedMediaAvailable = false;
  liked_media: string[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const headers: any = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.get(this.USERS_SELF_API_URL, {headers: headers})
      .subscribe(data => {
          console.log('data=' + JSON.stringify(data));
          this.username = data['data']['username'];
          this.full_name = data['data']['full_name'];
          this.profile_picture = data['data']['profile_picture'];
          this.numOfPosts = data['data']['counts']['media'];
          this.numOfFollowers = data['data']['counts']['followed_by'];
          this.numOfFollowing = data['data']['counts']['follows'];

          this.userInfoAvailable = true;
        },
        err => {
          console.log('err=' + JSON.stringify(err));
        });

    this.http.get(this.USERS_SELF_MEDIA_RECENT_API_URL, {headers: headers})
      .subscribe(data => {
          console.log('data=' + JSON.stringify(data));

          const recent_media = [];
          data['data'].forEach(function (element) {
            const media = element;
            recent_media.push({
              url: media['images']['low_resolution']['url'],
              numOfLikes: media['likes']['count'],
              numOfComments: media['comments']['count']
            });
          });
          this.recent_media = recent_media;

          this.recentMediaAvailable = true;
        },
        err => {
          console.log('err=' + JSON.stringify(err));
        });

    this.http.get(this.USERS_SELF_MEDIA_LIKED_API_URL, {headers: headers})
      .subscribe(data => {
          console.log('data=' + JSON.stringify(data));

          const liked_media = [];
          data['data'].forEach(function (element) {
            const media = element;
            liked_media.push(media['images']['thumbnail']['url']);
          });
          this.liked_media = liked_media;

          this.recentMediaAvailable = true;
        },
        err => {
          console.log('err=' + JSON.stringify(err));
        });
  }

  getOverlayText(media) {
    return media.numOfLikes + ' likes, ' + media.numOfComments + ' comments';
  }

}
