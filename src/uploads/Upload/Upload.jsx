import upload  from '../../assets/Images/Upload-video-preview.jpg';
import Btn from '../../components/Btn/Btn';
import './Upload.scss';
import { useNavigate } from 'react-router-dom';

function Upload (props) {

  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    alert('upload successfully');
    navigate('/', {replace : true});
    console.log('move');
  }

  return(
    <div className='upload'>
      <div className='upload__container'>
        <h1 className='upload-title'>Upload Video</h1>
          <div className='upload-details'>
            <div className='upload-details__section'>
              <h4 className='upload-subtitle'>VIDEO THUMBNAIL</h4>
              <img className='upload-thumbnail' src={upload} alt="" />
            </div>
            <form className='upload-form__section'>
              <div className='upload-form'>
                <h5 className='upload-form__title'>TITLE YOUR VIDEO</h5>
                <input className='upload-form__input' type="text" placeholder='Add a title to your video' />
                <h5 className='upload-form__title'>ADD A VIDEO DESCRIPTION</h5>
                <textarea className='upload-form__text' placeholder='Add a description to your video' name="text" id="" cols="15" rows="5"></textarea>
              </div>
              <div className='upload-form__btn'>
                <Btn onClick={() => handleNavigateToHome()} className='btn_publish' text='PUBLISH'/>
                <button className='upload-btn'>CANCEL</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Upload; 
