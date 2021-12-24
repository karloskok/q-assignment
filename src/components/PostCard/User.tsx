import React from "react"

export interface IUserProps {
    /**
     * Unique label of Tab to show when clicked.
     */
    name: string
}

/**
 * This component allows changing of the active Tab.
 */
export const User: React.FC<IUserProps> = props => {
    return (
        <div>
            <h6 className="card-subtitle mb-2 text-muted">{props.name}</h6>
            <div>
                {props.children}
            </div>
        </div>
    )
}