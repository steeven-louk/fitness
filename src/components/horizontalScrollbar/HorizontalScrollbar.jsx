import React from 'react'

// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import './style/style.scss';


const HorizontalScrollbar = (props) => {
  return (
    <div className='scrollbar__container d-flex justify-content-around fw-bold text-capitalize my-5'>
       {props?.data.map((item, index) =>(
        <div className="text-center d-flex flex-column" key={index}>
            <img src="./assets/icons/gym.png" alt="gym" width="40rem" />
            <span className='mt-4'> {item} </span>
        </div>
       ))}
    </div>
  )
}

export default HorizontalScrollbar