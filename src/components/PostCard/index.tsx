import { Header, IHeaderProps } from './Header';
import { Body, IBodyProps } from './Body';
import { User, IUserProps } from './User';
import { Comments, ICommentsProps } from './Comments';
import { Comment, ICommentProps } from './Comment';
import React, { createContext, useState } from 'react';

interface IPostCardComposition {
    Header: React.FC<IHeaderProps>;
    Body: React.FC<IBodyProps>;
    User: React.FC<IUserProps>;
    Comments: React.FC<ICommentsProps>;
    Comment: React.FC<ICommentProps>;
}

interface IPostCardContext {
    toggleShow: boolean
    setToggleShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const ToggleContext = createContext<IPostCardContext | null>(null);


const PostCard: React.FC & IPostCardComposition = ({ children, ...restProps }) => {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <div className="card">
                <div className="card-body">
                    {children}
                </div>
            </div>
        </ToggleContext.Provider>
    )
}


PostCard.Header = Header;
PostCard.Body = Body;
PostCard.User = User;
PostCard.Comments = Comments;
PostCard.Comment = Comment;

export { PostCard };