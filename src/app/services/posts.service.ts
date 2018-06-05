import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Post} from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  constructor(private httpClient: HttpClient) {}

  /*
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }
  */

  // projet OC
  savePosts() {
    this.httpClient
    // possibilité d'utiliser .post au lieu de .put
      .put('https://http:localhost:8080/public-api/persons/create', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
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

  /*
  // projet incident
  add(incident: Incident): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.baseurl, incident,  {headers});
  }
*/
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
