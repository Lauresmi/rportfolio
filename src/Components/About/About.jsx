import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { MdCastForEducation } from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src="" alt="" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ months experience</small>
            </article>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdCastForEducation className='about__icon' />
              <h5>Courses</h5>
              <small>Accenture SheGoesTech JavaScript <span>September-December 2021</span> </small><br />
              <small>Accenture Bootcamp JavaScript <span>January-March 2022</span></small>
            </article>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdCastForEducation className='about__icon' />
              <h5>Tools</h5>
              <small>Javascript ES6 <span>Vanilla JS</span> </small><br />
              <small>HTML5, CSS3, Responsive Design, Bootstrap <span></span></small>
              <small>ReactJS ecosystem <span>Beginner</span></small>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About