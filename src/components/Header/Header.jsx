import './Header.scss';
import Btn from '../Btn/Btn';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import logo from '../../assets/Logo/BrainFlix-logo.svg';

function Header(props) {
  return (
      <header className='header'>
         <img src={logo} alt="logo" className='logo'/>

          <div className='header-link'>
            <input className='search' placeholder="&emsp;&emsp;Search" />
            <img src={avatar} alt="avatar" className='image' />
          </div>
        <Btn className='btn_upload' text="UPLOAD"/>
      </header>
  );
}

export default Header;