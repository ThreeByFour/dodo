import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import Background from './components/background';
import ContentArea from './components/contentArea';

const App = () => {
    return (
        <div className="App">
            <Helmet>
                {/* Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-KRC4LHNL54"></script>
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-KRC4LHNL54');
                    `}
                </script>
            </Helmet>
            <ContentArea />
            <Background />
            
        </div>
    );
}

export default App;