import React from 'react'
import './WhatWeDo.css';
import { WhatWeDoData } from '../Banner/data';

const WhatWeDo = () => {
  return (
    <div className='wwd-container'>
        <div className='wwd-heading'>
        <text className='wwd-mainHeading'>WHAT WE DO</text>
        <text className='wwd-subHeading'>WE OFFER DIGITAL SOLUTIONS</text>
        </div>
        
    {WhatWeDoData.map((item, index) => {
      // Check if the index is even or odd to determine the layout
      const isEvenIndex = index % 2 === 0;
      const imagePosition = isEvenIndex ? 'left' : 'right';
      const descriptionPosition = isEvenIndex ? 'right' : 'left';

      return (
        <div className='wwd-dataContainer' key={index}>
          <div className='wwd-img' style={{ flex:1, order: imagePosition === 'left' ? 0 : 1}}>
            <img src={item.img} alt="Content" />
          </div>
          <div className='wwd-descContainer' style={{ flex:2, order: descriptionPosition === 'left' ? 0 : 1}}>
            <h2 className='wwd-descContainer_heading'>{item.heading}</h2>
            <h2 className='wwd-descContainer_subHeading'>{item.subheading}</h2>
            <p className='wwd-descContainer_desc'>{item.disc}</p>
            <button>READ MORE</button>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default WhatWeDo
