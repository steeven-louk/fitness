import React from 'react'

const Card = (props) => {

    return (
    <div className='card col-3 '>
        <img src={props?.item.gifUrl} alt="" className='card-img-top'/>
        <div className="card-body">
            <div className="target d-flex mb-3 gap-2">
                <span className="p-2 text-white bg-danger">{props?.item.target}</span>
                <span className="p-2 text-white bg-danger">{props?.item.bodyPart}</span>
            </div>
            <h4 className="fw-bold text-capitalize">{props?.item.name}</h4>
        </div>
    </div>
  )
}

export default Card