import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postListItem: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) {
  }

  onLike(): boolean {
    this.postsService.onLike(this.index);
    // this.postsService.savePosts();  ces deux instructions ont été rajoutées dans la méthode dans le service
    // this.postsService.emitPosts();  le emitPost ne sert à rien puisque je fais appel à la méthode du service qui le fait déja
    return false;
  }

  onDislike(): boolean {
    this.postsService.onDislike(this.index);
    // this.postsService.savePosts();
    // this.postsService.emitPosts();
    return false;

  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  ngOnInit() {
  }
}
