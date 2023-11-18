import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';


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
            <h1>Dodo webpage - under construction</h1>
        </div>
    );
}

export default App;