import * as React from "react"

export interface IBodyProps {
    /**
     * Unique identifier for this tab.
     */
    text: string
}

/**
 * Individual panel component.
 */
export const Body: React.FC<IBodyProps> = props => {
    return (
        <div>
            <p className="card-text">{props.text}</p>
            <div>
                {props.children}
            </div>
        </div>
    )
}