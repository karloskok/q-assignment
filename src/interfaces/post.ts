import IComment from "./comment";
import IUser from "./user";

export default interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
    user: IUser,
    comments?: IComment[]
}