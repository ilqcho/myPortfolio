import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import LogoI from '../../assets/images/logo-i.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  // faSuitcase,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoI} alt="logo" title="home" />
        <img className="sub-logo" src={LogoSubtitle} alt="Ignacio" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          // color="#ffd700"
          color="#FF8BFF"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul className="contact-icons-container">
        <li className="contact-icon">
          <a
            href="https://www.linkedin.com/in/ignacio-garcia-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              title="Linkedin"
              icon={faLinkedin}
              color="white"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className="contact-icon">
          <a href="https://github.com/ilqcho" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              title="GitHub"
              icon={faGithub}
              color="white"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        // color="#ffd700"
        color="#FF8BFF"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
