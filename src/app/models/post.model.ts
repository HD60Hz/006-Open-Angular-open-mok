export class Post {
  title: string;
  content: string;
  loveIts = 0;
  created_at: Date = new Date();

  like = 0;
  dislike = 0;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

