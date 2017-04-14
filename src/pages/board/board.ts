import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostPage, Post } from '../post/post';

@Component({
  selector: 'board',
  templateUrl: 'board.html'
})
export class BoardPage {

  board: string;

  posts: Post[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.board = navParams.get('board');
    this.fetch();
  }

  fetch() {
    if (this.board === 'a') {
      this.posts = [
        new Post('assets/img/anime.jpg', 'First post', 'This is a test'),
        new Post('assets/img/anime.jpg', 'Second post', 'This is a test'),
        new Post('assets/img/anime.jpg', 'Third post', 'This is a test'),
      ];
    }
    if (this.board === 'g') {
      this.posts = [
        new Post('assets/img/g.png', 'First post', 'This is a test'),
        new Post('assets/img/g.png', 'Second post', 'This is a test'),
        new Post('assets/img/g.png', 'Third post', 'This is a test'),
      ]
    }
  }

  show(post: Post) {
    this.navCtrl.push(PostPage, {post});
  }

}
