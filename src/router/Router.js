import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from '../components';
import { publicRoutes } from './routes';



const Router = () => {
    const routes = publicRoutes;

    return (
        <>
            <Routes>
                {
                    routes.map(route => (
                        <Route {...route} key={ route.path } />
                    ))
                }
            </Routes>
        </>
    );
};

export default Router;