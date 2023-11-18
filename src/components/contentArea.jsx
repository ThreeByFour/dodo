import React from 'react';
import './contentArea.css';

const ContentArea = () => {
  return (
    <div className="content-area">
      <div className="logo-space">
        <img className="text-logo" src="assets/images/text-logo.png" alt="Dodo text logo" />
      </div>
      <div className="text-content">
        <p>Dodo is our upcoming puzzle game.</p>
        <p>Try our Itch demo</p>
        {/* <p>Check us out on Steam!</p> */}
        <iframe frameborder="0" src="https://itch.io/embed/2320056?border_width=3&amp;bg_color=ffffff&amp;link_color=3aceea" width="212" height="171"><a href="https://ollieboyne.itch.io/dodo-demo">Dodo demo by OllieBoyne</a></iframe>
      </div>
    </div>
  );
};

export default ContentArea;
