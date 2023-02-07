import './index.scss';
import LogoI from '../../../assets/images/logo-i.png';
// import { useEffect, useRef } from 'react';
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
// import gsap from 'gsap-trial';

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoI} alt='I'/>
        </div>
    )
}

export default Logo;