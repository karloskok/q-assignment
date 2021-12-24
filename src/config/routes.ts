import IRoute from "../interfaces/route";
import PostDetailsPage from "../pages/post.details";
import PostPage from "../pages/posts";

const postRoutes: IRoute[] = [
    {
        name: 'Post',
        path: '/posts',
        component: PostPage
    },
    {
        name: 'Post Details',
        path: '/post/:id',
        component: PostDetailsPage
    }
];

const routes: IRoute[] = [
    ...postRoutes
];

export default routes;
