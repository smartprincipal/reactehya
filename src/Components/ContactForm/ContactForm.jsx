import React from 'react'
import './ContactForm.css'
import Locate from '../../asset/LocateIcon.png'
import Telephone from '../../asset/telIcon.png'
import Message from '../../asset/msgIcon.png'
import Youtube from '../../asset/Youtube.png'
import Twitter from '../../asset/Twitter.png'
import Instagram from '../../asset/Instagram.png'
import Facebook from '../../asset/Facebook.png'
import Location from '../../asset/location.png'
import Dot from '../../asset/dots.png'
import Blue from '../../asset/blue-design.png'
import Brown from '../../asset/brown-design.png'

const ContactForm = () => {
  return (
    <div>
      <section className="section1-container">
        <h3 className='g'>Get In Touch</h3>
        
        
        <section className="section1">
        <p className='leave'>Leave us a message</p>
        
        
        <section className="sub-section1">

    
    <div className="form">

      <form>
       {/* First Name */}
      <label for="First_Name" class="first-name-label" id="first-name-label">Name</label>

      <input className="first-name" type="text" id="firstName" placeholder="First_Name_Last_Name"/>
      
        {/* Email */} 
      <input className="email" type="email" name="Email" id="email" placeholder="Email Address"/>
      
      {/* Text Here */}
      <input className="text-here" type="text" placeholder="Your Message" id="textHere"/>
      
      {/* Submit button */}
       <input className="submit" id="submit" type="submit" value="Send"/>
     </form>
      </div>


     <article className="second">
     <div className="gg">
      <div className="icon">
       <img src={Locate} alt="Location"/>
      </div>
      <div className="cont">
       <p>
       Infomation technologies building, <br /> Victoria Island, Lagos, Nigeria.</p></div>
     </div>
     <div className="gg">
      <div className="icon"><img src={Telephone} alt="Telephone"/>
      </div>
      <div className="cont">
       <p>
        +234 081-1236-4568</p>
      </div>

     </div>
     <div className="gg">

      <div className="icon">
       <img src={Message} alt="Messsage Icon"/>
      </div>
      <div className="cont">
       <p>hello@info.com.ng</p>
      </div>
     </div>

     <div className="socialss">
      <div>
     <img src={Youtube} alt="Youtube"/>

      </div>
      <div>

     <img src={Instagram} alt="Instagram"/>
      </div>
      <div>
     <img src={Facebook} alt="Facebook"/>

      </div>
      <div>
     <img src={Twitter} alt="Twitter"/>

      </div>
     </div>
     
     <img src={Location} className='Location' alt="Location"/>
  

</article>


        </section>

        </section>
   <img className="dots2" src={Dot}alt="dots2"/>

   <img className="brown1" src={Brown} alt="brown-design"/>
  
   <img className="blue1" src={Blue} alt="blue-design"/>
      </section>
  

    </div>
  )
}

export default ContactForm