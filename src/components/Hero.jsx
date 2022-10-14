import React from 'react'

import { ReactComponent as Sunrise } from '../assets/sunrise-alarm.svg'

const Hero = () => {
  function handleClick() {
    console.log('Click')
  }
  return (
    <>
      <div className="flex items-center justify-center pt-6 pb-6">
        <Sunrise />
      </div>
      <header className="hero">
        <div className="hero-inner">
          <h1 className="hero-headline">Rise & Shine</h1>
          <p className="header-text">
            Coffee cortado, qui beans galao froth to go. Blue mountain et single
            origin aged flavour variety affogato.
          </p>
          <button onClick={handleClick} className="hero-button">
            Learn More
          </button>
        </div>
      </header>
    </>
  )
}

export default Hero
