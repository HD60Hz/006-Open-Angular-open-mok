import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Post} from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  constructor() {}

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
  onLike(i: number): void {
    this.posts[i].loveIts += 1;
    this.posts[i].like += 1;
    this.savePosts();
    this.emitPosts();
  }
  onDislike(i: number): void {
    this.posts[i].loveIts -= 1;
    this.posts[i].dislike += 1;
    this.savePosts();
    this.emitPosts();
  }
}
