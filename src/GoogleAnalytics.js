import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga'

function GoogleAnalytics(props) {

    const location = useLocation();

    React.useEffect(() => {
        ReactGA.initialize('UA-219080714-2');
        // To Report Page View 
        ReactGA.pageview(window.location.pathname + window.location.search);

        // console.log(`You changed the page to: ${window.location.pathname + window.location.search}`)
    }, [location]);

    return <>
        {props.children}
    </>;
}

export default GoogleAnalytics;
