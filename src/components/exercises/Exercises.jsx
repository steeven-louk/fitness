import React from 'react'
import Card from '../../UI/Card'

import './style/style.scss';


const Exercises = (props) => {
 
  return (
    <div className='exercise__container'>
        <h2 className="fw-bold text-capitalize">showing results</h2>
        <div className="exercise__card d-flex flex-wrap gap-5 justify-content-center mt-5">
            {props?.exercice.map((item) =>(
              <Card key={item.id} item={item}/>
            ))} 
        </div>
    </div>
  )
}

export default Exercises