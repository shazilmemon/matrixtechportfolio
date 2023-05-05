import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import styles from './body.module.css'
import image from '../../../images/displayimage.jpg'
import image2 from '../../../images/displayimage2.jpg'
import { FaConnectdevelop } from 'react-icons/fa'
import { AiFillAppstore } from 'react-icons/ai'
import { AiFillApple } from 'react-icons/ai'
import { SiInteractiondesignfoundation } from 'react-icons/si'
import { SiCairographics } from 'react-icons/si'
import about from '../../../images/aboutcompany.png'
import project1 from '../../../images/reilu.png'
import project2 from '../../../images/stiq.png'
import project3 from '../../../images/filmfestival.png'
import project4 from '../../../images/swell.png'
import project5 from '../../../images/safebar.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { GrUserExpert } from 'react-icons/gr'
import display from '../../../images/displayimage.jpg'
import display3 from '../../../images/displayimage3.jpg'
import display4 from '../../../images/displayimage4.jpg'
import olive from '../../../images/oliveGeorge.jpg'
import leo from '../../../images/leooscar.jpg'
import john from '../../../images/johnwilliam.jpg'
import logo from '../../../images/logo.png'
import {FaFacebook} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useState } from 'react'



const Body = () => { 
  const [show, setShow] = useState(false)
  const [navbarmain,setnavbar] = useState(false)
  const handleShow = () => {
    setShow(!show)}    
  return (
    
    <div>



      <div className={styles.display}>
        <div  onClick={handleShow} className={styles.greymenu}>
          <p className={styles.menupara}>Menu  </p>
          <div className={styles.navbarRes}>

</div>
<div className={styles.bodysidemenu}> 
<div className={styles.responsivediv} style={{
          zIndex: show ? 1 : 0,
          width: show ? "1065px" : "0px",
          transition:"1s"
          
        }}>
{show ?
          <ul className={styles.menuitems}>
            {/* <img className={styles.background} src = {background}/> */}
            
            <li  className={styles.about}>Explore
            <div className={styles.hidden}> 
            <li>About</li>
            <li>Meet our Team</li>
            <li>Faqs</li>
            <li>Contact</li>
            </div>
            </li>
            
            
            <li className={styles.about}>Expertise
            <div className={styles.hidden}> 
            <li>Web Designing</li>
            <li>Web Development</li>
            <li>graphicdesigning</li>
            </div>
            </li>
            <li className={styles.about}>Products
            <div className={styles.hidden}> 
            <li>Reilu</li>
            <li>Stiq</li>
            <li>Film Festival</li>
            <li>Swell</li>
            <li>Safebar</li>
            </div>
            
            
            
            </li>
            
            
          </ul>
:null
}


        </div>
        </div>
        </div>

        <img className={styles.displayimage} src={image} />

        <img className={styles.displayimage2} src={image2} />

      </div>


      <div className={styles.wedoing}>
        <p className={styles.what}>What We Do
          <p className={styles.whatpara}>our services are defined by quality and commitment.</p>  </p>
        <div className={styles.cartsmain}>
          <div className={styles.cart1}>
            <FaConnectdevelop className={styles.development} />
            <p className={styles.carthead1}>Mobile Development</p>
            <p className={styles.cartpara1}>
              Our website development company works
              with clients based all over Pakistan and
              worldwide. A website is the central tool for
              the visibility of a business on the Internet.
              An effective website will not only strengthen
              the attraction, but also the acquisition and
              retention of new customers. If you have the
              ambition to accelerate your growth and
              increase your income.
            </p>

          </div>

          <div className={styles.cart2}>
            <AiFillAppstore className={styles.application} />
            <p className={styles.carthead2}>Mobile Apps</p>
            <p className={styles.cartpara2}>
              To improve your digital
              strategy and benefit from all the advantages of the mobile digital
              age, the mobile application allows you to
              open new distribution channels for your
              business. A dedicated application makes it
              possible to improve the visibility of brands,
              build customer loyalty, promote even
              improve your company's business processes.
            </p>

          </div>

          <div className={styles.cart3}>
            <AiFillApple className={styles.iosapplication} />
            <p className={styles.carthead3}>Ios Apps</p>
            <p className={styles.cartpara3}>
              A large community is using iphones in the
              world. We Design & Develop native iOS
              applications that dynamically adapt multiple
              screen sizes of iPhone & iPad. We will surely
              build your application which can compete at
              international level to get the ball rolling for
              your organization. The App Store is a
              platform provided by apple for distributing
              apps by developers to users.

            </p>
          </div>


        </div>



      </div>


      <div className={styles.orangecolor}>
        <div className={styles.aboutflex}>
          <img className={styles.aboutimg} src={about} />
          <p className={styles.aboutpara}>Our Vision is to achieve 100% customer satisfaction by delivering quality products and services at an affordable cost.</p>
        </div>
        {/* <button className={styles.button1}>Solution for small & large businesses</button>
<button  className={styles.button2}>Solution for all kind of agencies & businesses</button> */}
      </div>


      <p className={styles.expertsection}>Expertise</p>


      <div className={styles.servicesmain}>

        <div className={styles.service1}>
          <FaConnectdevelop className={styles.webdesigning} />
          <p className={styles.experthead}>Web Designing</p>
        </div>



        <div className={styles.service2}>
          <SiInteractiondesignfoundation className={styles.webdevelopment} />
          <p className={styles.experthead2}>Web Development</p>
        </div>


        <div className={styles.service3}>
          <SiCairographics className={styles.graphicdesigning} />
          <p className={styles.experthead3}>Graphic Designing</p>
        </div>

      </div>


      <div className={styles.projectsection}>
        <p className={styles.projecthead}>Our Unique Projects </p>
        <p className={styles.projectpara}>Ready-to-deploy applications that connect, enhance, and empower.</p>
      </div>
      <div className={styles.projectcartmain}>
        <div className={styles.projectcart1}>
          <img className={styles.project1img} src={project1} />
          <p className={styles.projectcarthead}>Reilu</p>
          <p className={styles.projectcartpara}>  A restaurant applica ...  </p>
          <button className={styles.projectbutton1}>Learn More <AiOutlineArrowRight className={styles.arrow} /> </button>
        </div>

        <div className={styles.projectcart2}>
          <img className={styles.project2img} src={project2} />
          <p className={styles.projectcarthead2}>Stiq </p>
          <p className={styles.projectcartpara}>  STiQ Allows a lead organi ...   </p>
          <button className={styles.projectbutton1}>Learn More <AiOutlineArrowRight className={styles.arrow} /> </button>
        </div>


        <div className={styles.projectcart3}>
          <img className={styles.project3img} src={project3} />
          <p className={styles.projectcarthead3}>Film Festival</p>
          <p className={styles.projectcartpara}>  Film festival mobi ...   </p>
          <button className={styles.projectbutton1}>Learn More <AiOutlineArrowRight className={styles.arrow} /> </button>
        </div>
      </div>


      <div className={styles.projectcartmain2}>
        <div className={styles.projectcart4}>
          <img className={styles.project4img} src={project4} />
          <p className={styles.projectcarthead4}>Swell</p>
          <p className={styles.projectcartpara}>  A Swellcast is a micro-pod ...   </p>
          <button className={styles.projectbutton1}>Learn More <AiOutlineArrowRight className={styles.arrow} /> </button>
        </div>


        <div className={styles.projectcart5}>
          <img className={styles.project5img} src={project5} />
          <p className={styles.projectcarthead5}>Safe Bar</p>
          <p className={styles.projectcartpara}>  A bar is a retail establi ...    </p>
          <button className={styles.projectbutton1}>Learn More <AiOutlineArrowRight className={styles.arrow} /> </button>
        </div>
      </div>

      {/* <div className={styles.expertsubmain}>
        <p className={styles.benifitssection}>Our Benifits
          <p className={styles.benifithead}>Reason Why We<br></br> Are Best</p> </p>

        <div className={styles.expertflex}>
          <div className={styles.expert1main}>
            <GrUserExpert className={styles.expert1} />
            <p className={styles.expertpara}>The best user<br></br> interfaces and<br></br> experience</p>
          </div>


          <div className={styles.expert1main}>
            <GrUserExpert className={styles.expert1} />
            <p className={styles.expertpara}>The best user<br></br> interfaces and<br></br> experience</p>
          </div>
        </div>
          <div className={styles.imagesdiv}> 
        <img className={styles.threeimg} src={display3} />
        <img className={styles.threeimg2} src={display} />
        <img className={styles.threeimg3} src={display4} />
        </div>

      </div> */}
      {/* <div className={styles.paradiv}> 
      <p className={styles.finalpara}>Investing in our people is of critical
        <p>    importance as we move forward. </p>
        <p>     Asinlabs believes in reinventing itself </p>
        <p>     every few years, which is why we have </p>
        <p>       grown over the past four decades. We </p>
        <p>        have created a culture that allows us to </p>
        <p>         foster innovation in its broader sense </p>
        <p>         and focus on idea generation. </p></p>
        </div> */}

      <p className={styles.feedbacksectionhead}>Happy Customers
        <p className={styles.feedbacksubpara}>The remarkable results achieved by organizations that trust Matrix Tech.</p>
      </p>

      <div className={styles.animationdiv}>

        <Swiper
          pagination={{
            dynamicBullets: true,
            
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img className={styles.oliveimg} src={olive} />
            <p className={styles.olivepara}> <p className={styles.olivename}>Olive Geourge</p>
              "They are very sharp and have a high-quality team. I expect quality from
              people, and they have the kind of team I can work with. They were upfront
              about everything that needed to be done. I appreciated that the
              cost of the project turned out to be smaller than what we expected because they made
              some very good suggestions. They are very pleasant to work with"</p>
          </SwiperSlide>
          <SwiperSlide><img className={styles.leoimg} src={leo} />
            <p className={styles.leopara}>  <p className={styles.leoname}>Leo Oscar</p>
              "They know what they are doing, they do
              their best, and they are all super friendly,
              reliable, communicative people.Their
              flexibility makes it possible to increase and
              decrease their involvement based on our
              needs.The most impressive thing was the
              knowledge and quality of the developers
              and the second project manager."</p>

          </SwiperSlide>
          <SwiperSlide><img className={styles.johnimg} src={john} />
          <p className={styles.johnpara}>  <p className={styles.johnname}>John William</p>
            "Matrix Tech is the firm to work with if you want to keep up to high standards.
             The professional workflows they stick to result in exceptional quality. Important,
              they help you think with the business logic of your application and they don’t
               blindly follow what you are saying. Which is super important. Overall, great
                skills, good communication, and am happy with the results so far"</p>
          </SwiperSlide>
        </Swiper>
      </div>
          
          
<div className={styles.joinussection}>
 <div>  
<p className={styles.joinus}>Join us!</p>
<p className={styles.challenge}>Challenge Your Limits</p>
<p className={styles.challengepara}> 
<p> Systems Limited is one of the most sought-after employers in the industry. Apply </p>
<p> now and become a part of the Systems family. </p>
</p>
<button className={styles.jobbutton}>View All Jobs <AiOutlineArrowRight className={styles.challengearrow}/></button>
</div>
</div>

     


<div className={styles.newslettersection}>
<div>
  <p className={styles.newsletter}>NewsLetter</p>
  <p className={styles.what2}>What’s happening? Be the first to know.</p>
  <p className={styles.what2para}>What’s happening? Be the first to know.</p>
  <input  placeholder='E-Mail*' className={styles.inputemail}/>
  <button className={styles.submitbutton}>Submit</button>
</div>
<img className={styles.zindeximg} src = {image2}/>
</div>



<div className={styles.footersection}>
<p className={styles.footerpara}>Get in a Touch</p>
<img className={styles.footerlogo} src = {logo}/>
</div>
<p className={styles.footersub}>Technology You Can Trust</p>

<div className={styles.footerinformation}>
<p>Explore
<ul className={styles.footerul1}>  
<li>About</li>  
<li>Meet our Team</li>  
<li>FAQS</li>  
<li>Contact</li> </ul>   
  </p>  
<p>Expertise
<ul className={styles.footerul2}>
<li>Web Designing</li>  
<li>Web Development</li>  
<li>Graphic Designing</li>  
</ul>  
</p>  
    
<p>Products
<ul className={styles.footerul3}>
<li>Reilu</li>
<li>Stiq</li>
<li>Film Festival</li>
<li>Swell</li>
<li>Safe Bar</li>
</ul>  
</p>  
</div>

<div className={styles.lines}> 

</div>  
  
  
<div className={styles.socialmedia}>

<div className={styles.copyright}>
© Copyright 2023 by Matrix Tech
</div>

<div className={styles.medialinks}>
 <p className={styles.follow}>Follow Us</p> 
 <FaFacebook className={styles.facebook}/> 
 <FiTwitter className={styles.twitter}/> 
 <BsInstagram className={styles.instagram}/> 
 <BsLinkedin className={styles.linkedin}/> 
</div>


</div>







    </div>
  )
}

export default Body