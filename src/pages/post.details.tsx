import { debug } from 'console';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import BaseComponent from '../components/Base';
import Navigation from '../components/Navigation';
import { PostCard } from '../components/PostCard';
import config from '../config/config';
import { getData } from '../helper/helper';
import IComment from '../interfaces/comment';
import IBaseComponentProps from '../interfaces/componentProps';
import IPost from '../interfaces/post';
import IUser from '../interfaces/user';
export interface IPostDetailsPageProps extends IBaseComponentProps { }

// class PostDetails extends React.Component<IPostDetailsPageProps> {
//   componentDidMount() {
//       console.log(this.props.message + PostDetails.name);
//   }
//   render() {
//     return (
//       <div>
//             <p>posts details page: {this.props.match.id}</p>
//       </div>
//     );
//   }
// }


const PostDetails: React.FunctionComponent<IPostDetailsPageProps> = (props) => {

    const [post, setPost] = useState<IPost>({ id: -1, userId: -1, body: '', title: '', user: { id: -1, name: '', username: '', email: '' } });
    const params = useParams();

    useEffect(() => {
        console.log(props.message + PostDetails.name);

        getData([
            config.server.url + '/posts/' + params.id,
            config.server.url + '/posts/' + params.id + '/comments',
        ],
            async (data) => {
                var comments: IComment[] = [];
                data[1].forEach((x: { id: any; name: any; email: any; body: any; }) => {
                    let c: IComment = {
                        id: x.id,
                        name: x.name,
                        email: x.email,
                        body: x.body,
                    }
                    comments.push(c);
                });
                let post = data[0];
                var p: IPost = {
                    id: post.id,
                    userId: post.userId,
                    body: post.body,
                    title: post.title,
                    user: { id: -1, name: '', username: '', email: '' },
                    comments: comments
                }
                getData([config.server.url + '/users/' + data[0].userId], (users) => {
                    let user = users[0];
                    let u: IUser = {
                        id: user.id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                    }
                    p.user = u;
                    setPost(p);
                })
            });
    }, []);

    return (
        <Container>
            <Navigation title='QAGENCY' showBack={true} />
            <PostCard>
                <PostCard.Header title={post.title} />
                <PostCard.User name={post.user.name} />
                <PostCard.Body text={post.body} />
                <PostCard.Comments alwaysOpen>
                    {
                        post.comments?.map((x, index) => {
                            return (
                                <PostCard.Comment key={index} name={x.name} email={x.email} body={x.body}></PostCard.Comment>
                            )
                        })
                    }
                </PostCard.Comments>
            </PostCard>
        </Container>
    )
}
const PostDetailsPage = BaseComponent(PostDetails);


export default PostDetailsPage;
