import Comment from "./comments.ts";

// ERROR: El nombre de las variables no estaban como indica la documentacion de la API
interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  cover: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
}

export default Post;
