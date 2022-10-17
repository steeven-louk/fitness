import React from 'react'

const Detail = (props) => {

    const {bodyPart, equipment, gifUrl, name, target} = props.exercise;
    
    let TargetImage = '../assets/icons/target.png';
    let EquipmentImage = '../assets/icons/equipment.png';
    let BodyPartImage = '../assets/icons/body-part.png'

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        }, 
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

  return (
    <div className="detail__component">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={gifUrl} loading="lazy" alt={name}/>
                </div>
                <div className="col-md-6 p-5">
                    <h1 className="title fw-bold text-capitalize">{name}</h1><br />
                    <p className='text-muted'>
                        Exercises keep you <strong> {name} </strong>is one of the best exercises to target your abs. It will help you improve your mood and gain energy.
                    </p>
                    
                    <div className="d-flex flex-column gap-4">
                        {extraDetail?.map((items)=>(
                           <div key={items.name}>
                                <span><img src={items.icon} alt={items.name}/></span>
                                <span className='mx-2 text-capitalize fw-400'> {items.name} </span>
                           </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail