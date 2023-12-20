import React from "react";

export const CarouselItem = ({ item }) => {
  return (
    <div
      className='carousel-item'
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div></div>
      {/* <img className='carousel-img' src={item.image.default} alt={item.title} /> */}
      <div>
        <h4>{item.title}</h4>
        <div className='carousel-item-text'>{item.description}</div>
        {/* there could be multiple links, so this will need to be rendered with .map() to allow for that possibility */}
        <a href={item.link}>Learn more</a>
      </div>
    </div>
  );
};
