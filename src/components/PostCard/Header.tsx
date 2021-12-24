import React from "react"

export interface IHeaderProps {
    /**
     * Unique label of Tab to show when clicked.
     */
    title: string
}

/**
 * This component allows changing of the active Tab.
 */
export const Header: React.FC<IHeaderProps> = props => {
    return (
        <div>
            <h4 className="card-title">{props.title}</h4>
            {props.children}
        </div>
    )
}