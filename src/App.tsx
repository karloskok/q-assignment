import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import routes from './config/routes';

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = (props) => {

    return (
        <Routes>
            {
                routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    )
                })

            }
            <Route path="/" element={
                <Navigate to="/posts" />
            }>
            </Route>
        </Routes>
    )
}

export default App
