import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    useEffect(() =>{
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "contact_service",
            "contact_form",
            form.current,
            "r437-DMSrEIP5EqP5"
        )
        .then(
            () => {
                alert('Message successfully sent!');
                return false;
            },
            () => {
                alert('Failed to send the message, please try again');
            }
        )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in long term contractor opportunities - specially ambitious or large projects. However, if you have other opportunities or questions don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required>
                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" value="SEND" className="flat-button" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Ignacio García,
                    <br />
                    Argentina,
                    <br />
                    Rosario,
                    <br />
                    Colón 2056
                    <br />
                    <span>ig.ignaciogarcia.ig@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[-32.963603, -60.629515]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[-32.963603, -60.629515]}>
                            <Popup>Ignacio lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Contact;