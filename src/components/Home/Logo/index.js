import './index.scss';
import LogoI from '../../../assets/images/logo-i.png';

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoI} alt='I'/>
        </div>
    )
}

export default Logo;