import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { MdCastForEducation } from 'react-icons/md'
import laptop from '../../Assets/laptop.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={laptop} alt='' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ months experience</small>
            </article>

            <article className='about__card'>
              <MdCastForEducation className='about__icon' />
              <h5>Courses</h5>
              <small>SheGoesTech JS</small><br />
              <small>Bootcamp JS</small>
            </article>

            <article className='about__card'>
              <MdCastForEducation className='about__icon' />
              <h5>Tools</h5>
              <small>...</small>
            </article>


          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis, recusandae odio provident possimus qui iusto iste. Corrupti nesciunt dicta ducimus excepturi sed sint architecto labore nemo. Qui, architecto possimus.</p>

          <a href="#contact" className='btn btn-primary'>Let`s connect</a>

        </div>
      </div>

    </section>
  )
}

export default About