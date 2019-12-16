import React, { useRef } from 'react';
import Logo from '../../logo.svg'
import './navbar.css';

const myFunction = (ref) => {

    if (ref.current.className === 'Navbar') {
        ref.current.className += ' responsive';
    } else {
        ref.current.className = 'Navbar'
    }


}

const navbar = (props) => {

    const ref = useRef(null);
    console.log('before');

    return (

        <div className="Navbar" ref={ref}>
            <img src={Logo} className="NavbarLogo"></img>
            <a className="Icon" onClick={() => myFunction(ref)} >
                <i class="fa fa-bars"></i>
            </a>
            <a className="NavbarLink active" href="/">Home</a>
            <a className="NavbarLink" href="/">Tours</a>
            <a className="NavbarLink" href='/'>About</a>

        </div>

    )



}


export default navbar;