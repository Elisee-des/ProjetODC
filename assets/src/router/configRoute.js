import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../views/not-found";
import routes from "./routes";
import Backend from '../layouts/back-end';
import Fontend from '../layouts/font-end';
import Blank from '../layouts/blank';

const Layout = {Backend, Fontend, Blank}

const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => {
                    const ViewComponent = route?.component;
                    const LayouteRoute = route.layout ? Layout[`${route.layout}`] : Blank;
                    if(false) {
                        // redirect
                    }
                    return (
                        <Route 
                            key={index}
                            path={`${route?.pathName}`}
                            element={
                                <LayouteRoute>
                                    <ViewComponent />
                                </LayouteRoute>
                            } />
                    )
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteConfig;
