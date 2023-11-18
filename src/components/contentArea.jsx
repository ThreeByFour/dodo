import React from 'react';
import './contentArea.css';

const ContentArea = () => {
  return (
    <div className="content-area">
      <div className="logo-space">
        {/* Logo will go here. You can replace it with an <img> tag */}
      </div>
      <div className="text-content">
        <p>Dodo is our upcoming puzzle game.</p>
        <p>Try our Itch demo</p>
        <p>Check us out on Steam!</p>
      </div>
    </div>
  );
};

export default ContentArea;
