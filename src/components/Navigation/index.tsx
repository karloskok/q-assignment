import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from 'reactstrap';
import IBaseComponentProps from '../../interfaces/componentProps';
import BaseComponent from '../Base';

export interface INavigationProps {
    title: string,
    showBack?: boolean
}


const NavigationBase: React.FunctionComponent<INavigationProps> = ({ children, ...restProps }) => {
    return (
        <Navbar>
            {
                restProps.showBack &&
                <NavbarBrand tag={Link} to="/posts" >
                    <i className="fas fa-arrow-left"></i>
                </NavbarBrand>
            }

            <Nav className="m-auto" navbar>
                {restProps.title}
            </Nav>
        </Navbar>
    )
}

// const NavigationBase: React.FunctionComponent<INavigationProps> = (props) => {
//     return (
//         <Navbar>
//             <Container>
//                 <NavbarBrand tag={Link} to="/" />
//                 <Nav className="mr-auto" navbar />
//             </Container>
//         </Navbar>
//     )
// }

// const Navigation = NavigationBase);


export default NavigationBase;
