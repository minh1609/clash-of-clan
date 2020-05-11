import React from "react";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";

import Home from "./Home";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Route exact path="/" component={Home} />
            </div>
        </BrowserRouter>
    );
};

export default App;
