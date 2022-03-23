import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import StreamHome from "../stream/StreamHome";
import Home from "../base/Home";

export default class MyRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="stream" element={<StreamHome />} />
                </Routes>
            </BrowserRouter>
        )
    }
}