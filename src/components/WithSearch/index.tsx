import React from 'react';
import { Container } from 'reactstrap';
import IBaseComponentProps from '../../interfaces/componentProps';
import IPost from '../../interfaces/post';
import IUser from '../../interfaces/user';
import Navigation from '../../components/Navigation';
import { getData } from '../../helper/helper';
import config from '../../config/config';


export interface IWithSearchBaseProps extends IBaseComponentProps { }
export interface IWithSearchBaseState {
    searchTerm: string;
    posts: any[]
    users: any[]
    comments: any[]
}

function WithSearch<P>(WrappedComponent: React.ComponentType<P>) {
    class WithSearchBase extends React.Component<P, IWithSearchBaseState> {

        constructor(props: P) {
            super(props);
            this.state = {
                searchTerm: "",
                posts: [],
                users: [],
                comments: []
            };
            this.handleSearch.bind(this);
        }

        componentDidMount() {
            getData([
                config.server.url + '/posts',
                config.server.url + '/users',
                config.server.url + '/comments',
            ],
                async (data) => {
                    let dataPosts = data[0];
                    let dataUsers = data[1];
                    let dataComments = data[2];

                    for (let i = 0; i < dataPosts.length; i++) {
                        const p = dataPosts[i];
                        p.user = dataUsers.find((x: { id: any; }) => x.id == p.userId);
                        p.comments = dataComments.filter((x: { postId: any; }) => x.postId == p.id);
                    }

                    this.setState({ users: dataUsers });
                    this.setState({ posts: dataPosts });
                    this.setState({ comments: dataComments });
                });
        }

        handleSearch = (event: { target: { value: any; }; }) => {
            this.setState({ searchTerm: event.target.value });
        };

        render() {
            let { searchTerm } = this.state;
            let filteredProducts = filterProducts(this.state.posts, searchTerm);
            return (
                <Container>
                    <Navigation title='QAGENCY' />

                    <input
                        onChange={this.handleSearch}
                        value={this.state.searchTerm}
                        type="text"
                        placeholder="Search"
                    />
                    <WrappedComponent data={filteredProducts} {...this.props as P} />
                </Container>
            )

        }
    };
    WrappedComponent.displayName = `WithSearch (${WrappedComponent.displayName || WrappedComponent.name})`;
    return WithSearchBase;
}

function filterProducts(data: any[], searchTerm: string): any[] {
    searchTerm = searchTerm.toUpperCase();
    return data.filter((post) => {
        let str = `${post.title} ${post.body} ${post?.user?.name}`.toUpperCase();
        return str.indexOf(searchTerm) >= 0;
    });
}

export default WithSearch;
