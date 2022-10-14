import React from 'react'
import './style/style.scss';


const HeroBanner = () => {

  return (
    <>
        <header>
            <div className="header container">
            <div className="header__left flex-column">
                    <h5 className="text-danger text-capitalize fw-bold mb-3">fitness club</h5>
                    <h3 className="fw-bold text-capitalize mb-4">Sweat, Smile and Repeat</h3>
                    <small>Check out the most effective exercises personalized to you</small>

                    <a href="/" className="btn border-0 bg-danger text-white text-uppercase mt-4">explore exercises</a>
                    <h1 className="exercice__text">Exercise</h1>
                </div>
                <div className="header__right">
                    <img src="./assets/images/banner.png" alt="banner" />
                </div>
            </div>
        </header>
    </>
  )
}

export default HeroBanner