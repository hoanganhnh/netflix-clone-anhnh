import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.scss'

function Navbar() {
    const [show, setShow] = useState(false)

    const transitionNavBar = () => {
        return window.scrollY > 100 ? setShow(true) : setShow(false)
    }

    useEffect(() =>{
        window.addEventListener('scroll', transitionNavBar)

        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])
    return (
        <div className={`${styles.wapper} ${show ? styles.sticky : ''}` }>
           <div className={styles.content}>
               <a href="###" className={styles.content__logo}>
                   <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"/>
                </a>
               <a href="###" className={styles.content__avatar}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU" alt="avatar"/>
                </a>
           </div>
        </div>
    )
}

export default Navbar
