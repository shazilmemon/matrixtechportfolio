import React from 'react'
import styles from './header.module.css'
import logo from '../../../images/logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'


const Header = () => {
  return (
    <div>

<div className={styles.headermain}>
 <div className={styles.logomain}> 
  <img className={styles.matrixlogo} src = {logo}/>
  <p className={styles.resmenu}>Menu</p>
  <p className={styles.resmenu2}>Menu</p>
  <p className={styles.resmenu3}>Menu</p>
<ul className={styles.ul}>
<li>Home</li>
<li>About</li>
<li>services</li>
<li>Contact</li>
</ul>
<AiOutlineSearch className={styles.searchicon}/>
<AiOutlineMenu className={styles.searchmenu}/>
</div>
</div>




    </div>
  )
}

export default Header