import React from 'react'
import HeroBackground from './HeroBackground'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import CarsContainer from './CarsContainer'

const Cars = () => {
  return (
    <>
      <HeroBackground hero="carsHero">
        <Banner title='Our Cars'>
          <Link to='/' className="btn-primary" style={{color: 'white', marginTop: 10, padding: 10,fontSize: 40,fontWeight: "bolder",backgroundColor: 'brown'}}>
            Return home
        </Link>
        </Banner>
      </HeroBackground>
      <CarsContainer />
    </>
  )
}

export default Cars;