import React from 'react';
import './contentArea.css';

const ContentArea = () => {
  return (
    <div className="content-area">
      <div className="logo-space">
        <img className="text-logo" src="assets/images/text-logo.png" alt="Logo" />
      </div>
      <div className="text-content">
        <p>Dodo is our upcoming puzzle game.</p>
        <p>Try out our web demo on <a href="https://ollieboyne.itch.io/dodo-demo"><b>itch.io</b></a>, and check us out on <a href="https://store.steampowered.com/app/2700250/Dodo/"><b>Steam</b></a></p>
      </div>
      <div className="embed-container">
          <iframe frameborder="0" src="https://itch.io/embed/2320056?bg_color=ffffff&amp;fg_color=222222&amp;link_color=3aceea&amp;border_color=ffffff" width="100%" height="167"><a href="https://ollieboyne.itch.io/dodo-demo">Dodo demo by OllieBoyne</a></iframe>
          <iframe src="https://store.steampowered.com/widget/2700250/" frameBorder="0" width="100%" height="190"></iframe>
      </div>
    </div>
  );
};

export default ContentArea;
