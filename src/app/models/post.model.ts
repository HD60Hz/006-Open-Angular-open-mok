export class Post {
  id: number;
  name: string;
  firstName: string;
  loveIts = 0;
  created_at: Date = new Date();

  like = 0;
  dislike = 0;

  constructor(name: string, firstName: string) {
    this.name = name;
    this.firstName = firstName;
  }
}

