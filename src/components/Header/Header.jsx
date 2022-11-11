import './Header.scss';
import Btn from '../Btn/Btn';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
      <header className='header'>
        <nav className='header-nav'>
          <Link to='/'>
            <img src={logo} alt="logo" className='header-logo'/>
          </Link>
          <div className='header-wrap'>
            <input className='search' placeholder="&emsp;&emsp;Search" />
            <img src={avatar} alt="avatar" className='image image-mobile' />
          </div> 
          <Link className='btn-link' to='/upload'>
            <Btn className='btn_upload' text="UPLOAD"/>
          </Link>
          <img src={avatar} alt="avatar" className='image image-tablet' />
        </nav>
      </header>
  );
}

export default Header;