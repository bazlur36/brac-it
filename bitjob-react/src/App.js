import React from 'react';
import Header from './Header';
import WeAreLive from './WeAreLive';
import WhyNeedBracJobs from './WhyNeedBracJobs';
import KeyFeaturesForHiring from './KeyFeaturesForHiring';
import Testimony from './Testimony';
import Pricing from './Pricing';
import SeeDemo from './SeeDemo';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function App() {
    return (
        <div className="main">
            <Header />
            <WeAreLive />
            <WhyNeedBracJobs />
            <KeyFeaturesForHiring />
            <Testimony />
            <Pricing />
            <SeeDemo />
            <Footer />





        </div>
    );
}

export default App;


