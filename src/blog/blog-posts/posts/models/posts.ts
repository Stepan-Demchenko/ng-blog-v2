type Post = Posts[];

export interface Posts {
  _id: string;
  title: string;
  author: string;
  content: string;
  image: string;
  description: string;
  __v: number;
}
