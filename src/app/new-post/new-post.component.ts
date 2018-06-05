import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required]
    });
  }
  onSavePost() {
    const name = this.postForm.get('name').value;
    const firstName = this.postForm.get('firstName').value;
   // const newPost = new Post(name, firstName);
    const newPost = new Post(name, firstName);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }
}
