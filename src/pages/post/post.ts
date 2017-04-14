import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

export class Post {
    constructor(public thumb: string, public title: string, public resume: string) {

    }
}

@Component({
    selector: 'post',
    templateUrl: 'post.html'
})
export class PostPage {
    post: Post;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.post = navParams.get('post');
    }
}