import React from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Header from '../../Components/Header/Header'
import './AboutUs.css'
import Footer from '../../Components/Footer/footer'

const AboutUs = () => {
  return (
    <div className='about'>
      <section className="hero-circles">
        <div className="header">
          <Header/>
        </div>
      </section>
      <div className="form">

      <ContactForm/>
      </div>
      <div className="footer">

      <Footer/>
      </div>

    </div>
  )
}

export default AboutUs