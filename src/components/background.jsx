import React from 'react';
import Cloud from './cloud';
import './background.css';

const Background = () => {
  // to allow for a looped website but to prevent jarring replaying, we have initial clouds on the screen
  // that don't loop, and clouds that start off the screen that do loop
  const numberOfCloudsInit = 10; // clouds present initially (these disappear)
  const numberOfCloudsLooping = 20; // clouds as part of looping animation

  const randomXOnscreen = () => (Math.random()) * 100.0;
  const randomXOffscreen = (trackLength) => (-1.0 + Math.random()) * trackLength;
  const randomY = () => (Math.random()) * 100.0;
  const randomSpeed = (a, b) => Math.random() * (b - a) + a; // Speed between a and b secs
  const randomSize = () => Math.random() * (50 - 20) + 20; // Radius between 20px and 50px
  const randomWidth = () => Math.random() * (100 - 50) + 50; // Width between 50px and 100px
  const randomGrey = () => {
    const greyValue = 255 * (0.8 + Math.random() * 0.2); // Generate a single grey value
    return `rgba(${greyValue}, ${greyValue}, ${greyValue}, 1)`; // Use the same value for R, G, and B
  };

  const cloudsInit = Array.from({ length: numberOfCloudsInit }, (_, index) => (
    <Cloud
      key={index}
      xPos={randomXOnscreen()} // make sure this matches trackLength in css
      yPos={randomY()}
      animationDuration={randomSpeed(40, 70)} // infinite
      circleRadius={randomSize()}
      rectWidth={randomWidth()}
      color={randomGrey()}
      loop={false}
    />
  ));

  const cloudsLooping = Array.from({ length: numberOfCloudsLooping }, (_, index) => (
    <Cloud
      key={index}
      xPos={randomXOffscreen(300)} // make sure this matches trackLength in css
      yPos={randomY()}
      animationDuration={randomSpeed(40, 70)}
      circleRadius={randomSize()}
      rectWidth={randomWidth()}
      color={randomGrey()}
      loop={true}
    />
  ));

  return <div className="background">{cloudsInit}{cloudsLooping}</div>;
};

export default Background;
