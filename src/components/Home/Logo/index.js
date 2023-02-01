import './index.scss';
import LogoI from '../../../assets/images/logo-i.png';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {

    const  bgRef = useRef();
    const  solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
    }, []);

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoI} alt='I'/>
        </div>
    )
}

export default Logo;