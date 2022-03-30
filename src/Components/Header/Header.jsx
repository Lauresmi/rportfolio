import React from 'react'
import './header.css'
import CallToAction from '../Header/CallToAction'
import myphoto from '../../Assets/LE_profile.png'
import HeaderSocials from '../Header/HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I`m</h5>
        <h1>Laura Esmite</h1>
        <h5 className='text-light'>Junior Front-end Developer</h5>
        <CallToAction />
        <HeaderSocials />
        
        <div className='my-image'>
          <img src={myphoto} alt=''/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>

      </div>
    </header>
  )
}

export default Header