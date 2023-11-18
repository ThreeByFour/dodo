import React from 'react';
import Cloud from './cloud';
import './background.css';

const Background = () => {
  const numberOfClouds = 20;

  const randomX = (trackLength) => (-1.0 + Math.random()) * trackLength;
  const randomY = () => (Math.random()) * 100.0;
  const randomSpeed = (a, b) => Math.random() * (b - a) + a; // Speed between a and b secs
  const randomSize = () => Math.random() * (50 - 20) + 20; // Radius between 20px and 50px
  const randomWidth = () => Math.random() * (100 - 50) + 50; // Width between 50px and 100px
  const randomGrey = () => {
    const greyValue = 255 * (0.8 + Math.random() * 0.2); // Generate a single grey value
    return `rgba(${greyValue}, ${greyValue}, ${greyValue}, 1)`; // Use the same value for R, G, and B
  };

  const clouds = Array.from({ length: numberOfClouds }, (_, index) => (
    <Cloud
      key={index}
      xPos={randomX(300)} // make sure this matches trackLength in css
      yPos={randomY()}
      animationDuration={randomSpeed(20, 50)}
      circleRadius={randomSize()}
      rectWidth={randomWidth()}
      color={randomGrey()}
    />
  ));

  return <div className="background">{clouds}</div>;
};

export default Background;
