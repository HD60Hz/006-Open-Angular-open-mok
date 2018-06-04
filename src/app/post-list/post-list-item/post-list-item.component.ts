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
    return false;
  }

  onDislike(): boolean {
    this.postsService.onDislike(this.index);
    return false;

  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  ngOnInit() {
  }
}
