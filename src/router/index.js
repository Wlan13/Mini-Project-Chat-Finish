import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from '../component/register/Register'
import Awal from "../component/awal/Awal";
import Login from "../component/login/Login";
import chatContainer from "../component/chat/chatContainer";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Awal} />
                <Route path='/register' component={Register} />
                <Route path='/chat' component={chatContainer} />
                <Route path='/login' component={Login} />
            </Switch>
        </Router>
    )
}
export default Routes