import React from 'react'
import {useState} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Navbar = ({location}) => {
    const [Navbar, setNavbar] = useState(false)
    const [mobile, setMobile] = useState(false)
    const changeBackground = () => {
        if(window.scrollY >= 12){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll',changeBackground)
    window.addEventListener('resize',()=>{
        var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

        var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

        if (w<320){
            setMobile(true)
        } else{
            setMobile(false)
        }
    });
    const scroll =  (amountToScroll)=>{
        //amount to scroll is negative to scroll up
        window.scrollTo(0 , amountToScroll)
    }

    return (
        <div>
            <motion.nav className={ mobile ? 'active-competition' : (Navbar ? (location.pathname === '/competition' ? "active-competition" : "active") : (location.pathname === '/competition' ? "nav-competition" : ""))}
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
                <Link to='/'>
                <img className="no-mobile" src="logo.png" alt="logo"/>  
                <img className="mobile" src="nav-drop.png" alt="nav-drop"/>
                </Link>
                <div className="navbar">
                    <ul className="nav-items">
                        <li>
                        {location.pathname === "/" ?
                            <a onClick={()=>scroll(0)}>Home</a> :
                            <Link onClick={()=>scroll(0)} to='/'>Home</Link>
                        }
                        </li>
                        <li>
                        {location.pathname === "/" ?
                        <a onClick={()=>scroll(1200)}>Events</a> :
                        <a onClick={()=>scroll(705)}>Events</a>
                    }
                            </li>
                        <li classname="register"><a href="">Register Now</a></li>
                    </ul>
                </div>
                {mobile && <Link to='/'>
                <img className="mobile" src="logo.png" alt="logo"/>  
                </Link>}  
            </motion.nav>
        </div>
    )
}

export default Navbar
