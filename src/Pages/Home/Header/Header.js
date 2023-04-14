import React from 'react'
import styles from './header.module.css'
import logo from '../../../images/logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import background from '../../../images/background.jpg'
import { useState } from 'react'

const Header = () => {
  const [show, setShow] = useState(false)
  const [navbarmain,setnavbar] = useState(false)
  const handleShow = () => {
    setShow(!show)}  
  return (
    <div>

<div className={styles.headermain}>
  <img className={styles.matrixlogo} src = {logo}/>
  <img className={styles.matrixlogo2} src = {logo}/>
 <div className={styles.logomain}> 
  <p  className={styles.resmenu}>Menu</p>
  <p  className={styles.resmenu2}>Menu</p>
  
<ul className={styles.ul}>
<li>Home</li>
<li>Services</li>
<li>Contact</li>
<li>More</li>
</ul>
<AiOutlineSearch className={styles.searchicon}/>
<AiOutlineMenu className={styles.searchmenu}/>
</div>
</div>

<div className={styles.navbarRes}>
  <section>
    <AiOutlineMenu onClick={handleShow} />
  </section>

</div>
<div className={styles.responsivemain}> 
<div className={styles.responsivediv} style={{
          zIndex: show ? 1 : 0,
          visibility: show ? "visible" : "hidden",
          
        }}>

          <ul className={styles.resul}>
            {/* <img className={styles.background} src = {background}/> */}
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>More</li>
            
          </ul>



        </div>
        </div>




    </div>
  )
}

export default Header