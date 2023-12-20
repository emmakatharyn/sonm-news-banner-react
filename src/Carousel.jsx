import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";

import "./index.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Open Enrollment for Plan Year 2024",
      description:
        "Organic artisan gastropub, vinyl lumbersexual quinoa sriracha flannel tote bag. Portland dreamcatcher thundercats, chillwave twee keytar flexitarian letterpress.",
      image: require("./Media/banner10.png"),
      link: "https://nmpsia.com/",
    },
    {
      title: "Find Out More on This Topic",
      description:
        "Yr waistcoat hoodie, kale chips pug craft beer lomo. Paleo intelligentsia polaroid chambray, lo-fi synth quinoa stumptown chillwave. Mixtape tattooed hella, PBR&B master cleanse street art readymade mumblecore. ",
      image: require("./Media/example2.svg"),
    },
    {
      title: "You Don't Wanna Miss This Shit",
      description:
        "Etsy shabby chic ugh, meh selvage flexitarian pour-over PBR&B listicle. Roof party poutine VHS, typewriter trust fund XOXO cold-pressed seitan DIY.",
      image: require("./Media/example3.svg"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      // keep idx from going below 0
      newIndex = 0;
    } else if (newIndex >= items.length) {
      // keep idx from going beyond length of array
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <div
          className='inner'
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <CarouselItem key={index} item={item} />
          ))}
        </div>
        <div className='carousel-buttons'>
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
            className='button-arrow'
          >
            <span className={`material-symbols-outlined`}>arrow_back_ios</span>
          </button>
          <div className='indicators'>
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  updateIndex(index);
                }}
                className='indicator-buttons'
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
            className='button-arrow'
          >
            <span className='material-symbols-outlined'>arrow_forward_ios</span>
          </button>
        </div>
      </div>

      <div className='vertical-list'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`list-item ${
              index === activeIndex ? "list-item-active" : ""
            }`}
            onClick={() => updateIndex(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
