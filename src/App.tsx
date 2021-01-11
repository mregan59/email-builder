import React, { useRef, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { renderHtml } from './base-components';
import OnboardingTemplate from './templates/OnboardingTemplate';
import { emails as day1Emails } from './emails/onboarding/day1';
import { emails as day2Emails } from './emails/onboarding/day2';
import { FlexBox } from './components';
import { Home, EditEmail } from './screens';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";


const Routes = () => {
    const history = useHistory();
    const [email, setEmail] = useState<any>(null);
    useEffect(() => {
        if (email) {
            history.push('/edit')
        }
    }, [email])

    return (
        <Switch>
            <Route path="/" exact>
                <Home setEmail={(em: any) => setEmail(em)}></Home>
            </Route>
            <Route path="/edit">
                <EditEmail email={email} onClick={() => setEmail(null)}></EditEmail >
            </Route>

        </Switch>
    )
}


function App() {


    return (
        <Router>
            <Routes></Routes>
        </Router>

    );
}

export default App;
