import './footer.css'
import Logo from '../../asset/Logo.svg'
import GoogleSocial from '../../asset/google-social.svg'
import TwitterSocial from '../../asset/twitter-social.svg'
import InstagramSocial from '../../asset/instagram-social.svg'
import LinkedinSocial from '../../asset/linkedin-social.svg'
import Heart from '../../asset/Heart.svg'
import { Link } from 'react-router-dom'


const footer = () => {
  return (
   <div>
    {/* FOOTER SECTION */}
    <footer>
      <section className="footer1">

        <article className="foot">
          <div className="logo">
           <img src={Logo} alt="Logo" />     
           </div>
           <p className="fot1">
             Build a modern and creative <br /> website with crealand
          </p>
          <div className="social-handles">
            <img src={GoogleSocial} alt="google-social"/>
            <img src={TwitterSocial} alt="twitter-social"/>
            <img src={InstagramSocial} alt="instagram-social"/>
            <img src={LinkedinSocial} alt="linkedin-social"/>
            
          </div>
  
        </article>
        <article className="foot">
          <Link to='./' className="foote" >Product</Link>
          <Link to='./' className="fot" >LandingPage</Link>
          <Link to='./' className="fote" >Feature</Link>
          <Link to='./' className="fote" >Documentation</Link>
          <Link to='./' className="fote" >Referral Program</Link>
          <Link to='./' className="fote" >Pricing</Link>
  
        </article>
        <article className="foot">
          <Link to='./' className="foote" >Services</Link>
          <Link to='./' className="fote" >Documentation</Link>
            <Link to='./' className="fote" >Design</Link>
            <Link to='./' className="fote" >Themes</Link>
            <Link to='./' className="fote" >Ilustration</Link>
          
            <Link to='./' className="fote" >UI Kits</Link>
  
        </article>
        <article className="foot">
          <Link to='./' className="foote" >Company</Link>
          <Link to='./' className="fot" >About</Link>
          <Link to='./' className="fote" >Terms</Link>
            <Link to='./' className="fote" >Privacy Policy</Link>
            <Link to='./' className="fote" >Careers</Link>
  
        </article>
        <article className="foot">
          <Link to='./' className="foote" >More</Link>
          <Link to='./' className="fot" >Documentation</Link>
            <Link to='./' className="fote" >Licence</Link>
            <Link to='./' className="fote" >Change Log</Link>
      
  
        </article>
      </section>

      <section className="footer2">
          <img src={Heart} alt="Heart"/>
          <p>Copyright &copy; 2021. Crafted with love.</p>
      </section>
    </footer>
   </div>
  )
}

export default footer