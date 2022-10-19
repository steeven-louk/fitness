import React from 'react'

// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import './style/style.scss';

const HorizontalScrollbar = (props) => {

  const {setbodyParts, data} = props;
  return (
    <div className='scrollbar__container d-flex justify-content-around fw-bold text-capitalize my-5'>
       {data?.map((item, index) =>(
        <div className="text-center d-flex flex-column" key={index} onClick={()=>{setbodyParts(item); window.scrollTo({top:1800, left:100, behavior: 'smooth'}) }}>
            <img src="./assets/icons/gym.png" alt="gym" width="40rem" />
            <span className='mt-4'> {item} </span>
        </div>
       ))}
    </div>
  )
}

export default HorizontalScrollbar