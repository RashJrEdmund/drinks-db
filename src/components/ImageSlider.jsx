/* eslint-disable react/prop-types */
import React from 'react';

export default function ImageSlider({ slideData }) {
  return (
    <div>
      <div className="imageSliderOverlay" />
      <div className="imageSlider_container">
        {slideData[1]?.map(() => {
          return <h2>{slideData[1].title}</h2>;
        })}
      </div>
    </div>
  );
}
