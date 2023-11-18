import React from 'react';
import './cloud.css';

const Cloud = ({ xPos, yPos, animationDuration, circleRadius, rectWidth, color, loop }) => {
  const circleStyle = {
    width: `${circleRadius * 2}px`, // Circle diameter
    height: `${circleRadius * 2}px`,
    backgroundColor: color,
    position: "absolute",
  };

  const rectStyle = {
    width: `${rectWidth}px`, 
    height: `${circleRadius * 2}px`, // Same height as circle diameter
    backgroundColor: color,
    position: "absolute",
    left: '0px',
  };

  const cloudStyle = {
    left: `${xPos}vw`,
    top: `${yPos}vh`,
    animationDuration: `${animationDuration}s`,
  };

  return (
    <div className={`cloud ${loop ? '' : 'non-looping'}`} style={cloudStyle}>
      <div className="circle" style={circleStyle} />
      <div className="rectangle" style={rectStyle} />
      <div className="circle" style={{...circleStyle, left:`${rectWidth-circleRadius}px`}} />
    </div>
  );
};

export default Cloud;
