
import './Landing.css'
import Header from '../../Components/Header/Header'
import Vector from '../../asset/Vector.png'
import HeroOverview from '../../asset/overview.png'
import HeroOverviewShape from '../../asset/Shape.png'
import Slack from '../../asset/slack.svg'
import Netflix from '../../asset/netflix.svg'
import Google from '../../asset/google.svg'
import Airbnb from '../../asset/airbnb.svg'
import Uber from '../../asset/uber.svg'
import Parabolic from '../../asset/parabolic.png'
import Phones from '../../asset/phones.png'
import Iphone from '../../asset/iphone12.png'
import Bullet from '../../asset/Bullet.svg'
import Macbook from '../../asset/Macbook.png'
import cardImage1 from '../../asset/cardImage1.png'
import cardImage2 from '../../asset/cardImage2.png'
import cardImage3 from '../../asset/cardImage3.png'
import cardImage4 from '../../asset/cardImage4.png'
import Card from '../../Components/Card/card'
import Quote from '../../asset/quote.png'
import Star from '../../asset/star.png'
import SmallImage1 from '../../asset/smallImage1.png'
import SmallImage2 from '../../asset/smallImage2.png'
import SmallImage3 from '../../asset/smallImage3.png'
import SmallImage4 from '../../asset/smallImage4.png'
import SmallImage5 from '../../asset/smallImage5.png'
import Footer from '../../Components/Footer/footer';
import Testimonials from '../../Components/Testimonials/Testimonials'

// import HeroSection from '../../sections/landing/HeroSection/heroSection';
// import { Form } from 'react-router-dom';
// import FirstSection from '../../sections/landing/FirstSection/firstSection';
// import SecondSection from '../../sections/landing/SecondSection/secondSection';
// import ThirdSection from '../../sections/landing/ThirdSection/thirdSection';
// import FourthSection from '../../sections/landing/FourthSection/fourthSection';




const Landing = () => {

  const data = [
    {id: 0, content: `Follow a hashtag growth total posts, videos and images.`, Img: cardImage1, head:`Hashtag Growth`},
    {id: 1, content: `Identify the most influential people posting with your hashtag.`, Img: cardImage2, head:`Influencers by Hashtag`},
    {id: 2, content: `See the most influential posts on hashtag you are following on.`, Img: cardImage3, head:`Most Influential Post`},
    {id: 3, content: `Visualize where people are posting using your hashtag made.`, Img: cardImage4, head:`Hashtag Location`}
  ]

  return (
    <div>
     <section className="hero-circle">
      <div className="header">

      <Header/>
      </div>

      {/* HERO_ SECTION CONTENT AND IMAGE */}
      <section className='sub-hero-circle'>
        <article className='hero-content'>
      <h1>We help you <br />grow your business <br />faster</h1>
      <img className='vector' src={Vector} alt="Vector" />
      <p className="ehya">
            Ehya is the Instagram analytics platform teams use to stay focused on the goals, track engagement for report your business .
          </p>
          <div className="fl">
            <form action="">
            <input className="btn-fl" type="button" value="See how it works "/>
            </form>
            <a className="col" href=".#">Get a free demo → </a>
            </div>
        </article>


      {/* Second Section of the HEro SECTION THAT WAS FLEXED{THE IMAGE SECTION OF HERO} */}
        <article className='hero-img'>
          <img className='heroOverview' src={HeroOverview} alt="Overview" />
          <img className='heroOverviewShape' src={HeroOverviewShape} alt="OverviewShape" />
        </article>
      </section>
      </section>

      {/* SECTION 1 */}
<section className="section1">
<div className="patners">
  <div className="patners-logo">
    <div>
    <img src={Slack} alt="Slack" />

    </div>
    <div>
    <img src={Netflix} alt="Netflix" />         
      
    </div>
    <div>
      
    <img src={Google} alt="Google" />
    </div>
    <div>
    <img src={Airbnb} alt="Airbnb" />   
      
    </div>
    <div>
    <img src={Uber} alt="Uber" />
      
    </div>
    </div>
  
</div>
<section className="patners2">
  <article className="phone">
    <img className='parabolic' src={Parabolic} alt="parabolic"/>
    <img className="phone1"  src={Phones} alt="iphone12"/>
    <img className='iphone' src={Iphone} alt="Iphone" />
  </article>

  <article className="patners2-content">
    <h3>
      Measure Impressions and Reach Post
    </h3>
    <p>
      Graphs displaying your performance for metrics like follower evolution, average engagement rate per post and reach and impressions to give you the insights.
    </p>
    <a className="ll" href=".#">
      Learn about graphs →
      </a>
  </article>
</section>
</section>

<section className="section2">
    <article className="tt">
      <p className="sch">Schedule Your Post Whenever You Want</p>
      <p className="pub">
        Publish your content automatically to ensure that your content reaches the right people. Built-in features such as
      </p>
      <article className="bull">
        <p><img className="same" src={Bullet} alt="Bullet"/>Best Time to Post</p>
        <p><img className="same" src={Bullet} alt="Bullet"/>Geolocation</p>
        <p><img className="same" src={Bullet} alt="Bullet"/>User Tag</p>
        <p><img className="same" src={Bullet} alt="Bullet"/>Others benefit</p>
      </article>
      <a href=".#" className="lea">Learn about scheduled post →</a>
    </article>
    <article className="tt-image">
      <img src={Macbook} alt="Macbook-Pro"/>
    </article>
  </section>

  <section className="section3">
    <article>
      <h2>
        Track any hashtag(s) Performance
      </h2>
      <p>
        Don’t waste time on search manual tasks. Let Automation do it for you. <br /> Simplify workflows, reduce errors, and save time.
      </p>
    </article>
    <div className="cardContainer">
      {data.map((item) => (
        <Card content={item.content} head={item.head} Img={item.Img} key={item.id}/>
      ))
      }
       {/* <Card content='Follow a hashtag growth total posts, videos and images.' head='Hashtag Growth' Img = {cardImage1}/>
      <Card content='Identify the most influential people posting with your hashtag.' head='Influencers by Hashtag' Img = {cardImage2}/>
      <Card content='See the most influential posts on hashtag you are following on.' head='Most Influential Post' Img = {cardImage3}/>
      <Card content='Visualize where people are posting using your hashtag made.' head='Hashtag Location' Img = {cardImage4}/> */}
      </div>
      </section>

      <section className="section4">
      <section className="section4-1">
        <article className="sub-sec4">
          <h3>Powering the growth of 100+ business & retailers in Indonesia.</h3>
          <p className="from">From single store, startups, to large multi-store brands.</p>
        </article>
        <article className="sub-sec41">
          <div className="stars">
            <img src={Quote} alt="quote"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt=""/><img src={Star} alt="star"/>
          </div>
          <div className="review">
            <p>
              “With Ehya, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”
            </p>
          </div>
          <Testimonials/>

      
            {/* <div className="testimonial" >

             Full-width slides quotes
              <div class="mySlides">
                <div className="test">
                  <img src="/asset/Photo.png" alt="Photo"/>
                </div>
                <div className="name">
                  <h3>
                    Jaquon Hart
                  </h3>
                  <p>
                    Digital Marketing Executive, Hypebeast
                  </p>
                </div>
              </div>
            
              <div class="mySlides">
                <div className="testimonial-image">
                  <img src="/asset/Photo.png" alt="Photo"/>
                </div>
                <div className="name">
                  <h3>
                    Johnson Oluwayemi
                  </h3>
                  <p>
                    Front-end Engineer, Worldwyz
                  </p>
                </div>
              </div>
            
              <div class="mySlides">
                <div className="test">
                  <img src="/asset/Photo.png" alt="Photo"/>
                </div>
                <div className="name">
                  <h3>
                    Ahmed Yussuf
                  </h3>
                  <p>
                    Digital Marketing Executive, Ahmmedolly
                  </p>
                </div>
              
              </div>
            
              <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
              <a className="next" onclick="plusSlides(1)">&#10095;</a>
            </div> */}
            
            {/* <div className="dot-container">
              <span class="dot" onclick="currentSlide(1)"></span>
              <span className="dot" onclick="currentSlide(2)"></span>
              <span class="dot" onclick="currentSlide(3)"></span>
              <span className="dot" onclick="currentSlide(3)"></span>
            </div> */}
        </article>
      </section>
      <section className="sub-section4">
        <article class="sub-sub">
          <section className="sub41">
            <p class="gr">
              Grow your brand presence on social media
            </p>
            <p>
              Join with more 1200+ happy customers
            </p>
            <div className="immg">
              <div class="immmg">
                <img className="smallImage1" src={SmallImage1} alt="smallImage1"/>
                <img class="smallImage2" src={SmallImage2} alt="smallImage2"/>
                <img className="smallImage3" src={SmallImage3} alt="smallImage3"/>
                <img class="smallImage4" src={SmallImage4} alt="smallImage4"/>
                <img className="smallImage5" src={SmallImage5} alt="smallImage5"/>
              </div>
              <div>
                <a href='.#' className="an">and others</a>
              </div>
            </div>
          </section>
          <section class="sub42-btnc">
            <button className="sub42-btn">Get your trial now</button>
          </section>
        </article>
      </section>
    </section>

    <Footer/>

    </div>
  )
}

export default Landing