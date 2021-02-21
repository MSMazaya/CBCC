import React from 'react'
import {useState} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Navbar = ({location}) => {
    const [Navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 12){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll',changeBackground)

    const scroll =  (amountToScroll)=>{
        //amount to scroll is negative to scroll up
        window.scrollTo(0 , amountToScroll)
    }

    return (
        <div>
            <motion.nav className={Navbar ? "active" : "" }
                initial={{
                    y:-1000,
                }}
                animate={{
                    y:0
                }}
                transition={{
                    delay:.4,    
                    type:'spring',
                    damping:14,
                }}
            >
                <img src="logo.png" alt="logo"/>  
                <div className="navbar">
                    <ul className="nav-items">
                        <li>
                        {location.pathname === "/" ?
                            <a onClick={()=>scroll(0)}>Home</a> :
                            <Link to='/'>Home</Link>
                        }
                        </li>
                        <li>
                        {location.pathname === "/" ?
                        <a onClick={()=>scroll(1100)}>Events</a> :
                        <a onClick={()=>scroll(580)}>Events</a> 
                        }
                            
                            </li>
                        <li classname="register"><a href="">Register Now</a></li>
                    </ul>
                </div>
            </motion.nav>
            
        </div>
    )
}

export default Navbar
