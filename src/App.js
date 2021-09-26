import React from "react";
import Header from "./Header";
import "./index.css";
import Greet from "./Greet"
import Chars from "./Chars";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" render={() => {
                        return (<Chars />)
                    }}>
                    </Route>
                    <Route exact path="/greet">
                        <Greet />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;