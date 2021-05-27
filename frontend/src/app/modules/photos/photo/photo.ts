export interface Photo {
  id: number;
  postDate: Date;
  url: string;
  descripition: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}
