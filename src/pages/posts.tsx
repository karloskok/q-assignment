import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import BaseComponent from '../components/Base';
import Navigation from '../components/Navigation';
import { PostCard } from '../components/PostCard';
import WithSearch from '../components/WithSearch';
import config from '../config/config';
import IBaseComponentProps from '../interfaces/componentProps';
import IPost from '../interfaces/post';
import IUser from '../interfaces/user';
export interface IPostPageProps extends IBaseComponentProps {
    data: IPost[]
}

class Post extends React.Component<IPostPageProps> {
    componentDidMount() {
        console.log(this.props.message + Post.name);
    }
    render() {
        return (
            <div>
                {
                    this.props.data.map((x, index) => {
                        return (
                            <div key={index}>
                                <PostCard>
                                    <Link to={`/post/${x.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }} >
                                        <PostCard.Header title={x.title} />
                                        <PostCard.User name={x?.user?.name} />
                                        <PostCard.Body text={x.body} />
                                    </Link>
                                    <PostCard.Comments >
                                        {
                                            x.comments?.map((x, index) => {
                                                return (
                                                    <PostCard.Comment key={index} name={x.name} email={x.email} body={x.body}></PostCard.Comment>
                                                )
                                            })
                                        }
                                    </PostCard.Comments>
                                </PostCard>
                            </div >

                        )
                    })
                }
            </div >
        );
    }
}

const PostPage = BaseComponent(WithSearch(Post));

export default PostPage;
