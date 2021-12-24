import React from "react"

export interface ICommentProps {
    /**
     * Unique label of Tab to show when clicked.
     */
    name: string,
    email: string,
    body: string
}

/**
 * This component allows changing of the active Tab.
 */
export const Comment: React.FC<ICommentProps> = props => {
    return (
        <div className="card">
            <div className="card-body">
                <figure>
                    <h5>{props.name}</h5>
                    <blockquote className="blockquote">
                        <p className="mb-0">{props.body}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        from <cite title="Source Title">{props.email}</cite>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}