import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import Simple from './components/loader/Simple';

// Global styles START 
import "./assets/plugins/font-awesome/css/font-awesome.min.css";
 
// Page level plugin styles START
import './assets/css/style.css';
import "./assets/pages/css/animate.css";

// Theme styles START
import "./assets/pages/css/components.css";
import "./assets/pages/css/slider.css";
import "./assets/corporate/css/style.css";
import "./assets/corporate/css/style-responsive.css";
import "./assets/corporate/css/themes/red.css";
import "./assets/corporate/css/custom.css";

const LazyRoute = lazy(() => import('./router/configRoute'))

const App = () => {
    return (
        <Suspense fallback={<Simple/>} >
            <LazyRoute />
        </Suspense>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}