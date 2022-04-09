import React from 'react';
import { useState, useEffect } from 'react';
import './Landing.scss';
import Content from './LandingContents/Content';
import Slider from './Slider/Slider';

const Landing = () => {
  const [imgList, setImgList] = useState({});

  useEffect(() => {
    fetch('/swiperItems 복사본.json')
      .then((res) => res.json())
      .then((data) => {
        setImgList(data);
      });
  }, [setImgList]);

  return (
    <div className="landing">
      <div className="pageContainer">
        <div className="contents">
          <Slider swiperList={imgList.landings} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
