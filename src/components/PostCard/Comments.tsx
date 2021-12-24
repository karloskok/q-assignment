import React, { useContext, useEffect } from "react"
import { ToggleContext } from "./index";

export interface ICommentsProps {
    alwaysOpen?: boolean,
}

/**
 * This component allows changing of the active Tab.
 */
export const Comments: React.FC<ICommentsProps> = props => {

    const toggle = useContext(ToggleContext);

    return (
        <div className="accordion" id="accordionExample">
            Comments:
            <div className="accordion-item">
                {
                    !props?.alwaysOpen &&
                    (
                        <a onClick={() => toggle?.setToggleShow(s => !s)} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            {
                                toggle?.toggleShow ?
                                    <i className="fas fa-angle-down"></i> :
                                    <i className="fas fa-angle-up"></i>
                            }
                        </a>
                    )
                }

                <div id="collapseOne" className={`accordion-collapse ${(toggle?.toggleShow || props?.alwaysOpen) ? '' : 'collapse'}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>

    )
}