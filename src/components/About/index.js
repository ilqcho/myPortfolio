import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJsSquare, faNode, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() =>{
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious full-stack/front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my skills.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a sociable person, a science fiction fanatic, history enthusiast, and tech-obsessed!!!
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faVuejs} color="#42b883" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faNode} color="#DD0031" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default About