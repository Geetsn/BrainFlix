import upload  from '../../assets/Images/Upload-video-preview.jpg';
import Btn from '../../components/Btn/Btn';
import './Upload.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Upload (props) {

  const url=`http://localhost:8080/videos/`;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onChangeTitle = event => {
    setTitle(event.target.value);
  }
  const onChangeDescription = event => {
    setDescription(event.target.value);
  }
  
  const navigate = useNavigate();


  const handleNavigateToHome = () => {
    alert('upload successfully');
    navigate('/', {replace : true});
    console.log('move');
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if(title && description){
      const newUpload = {
        title: title,
        description:description
      };
      axios
      .post(`${url}`, newUpload).then(
        response =>{
          console.log(response);
          alert("Uploaded successfully")
          navigate('/')
        }
      )

    }else{
      alert("need title and description to upload")
    }
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
            <form onSubmit={(event) => {handleOnSubmit(event)}} className='upload-form__section'>
              <div className='upload-form'>
                <h5 className='upload-form__title'>TITLE YOUR VIDEO</h5>
                <input value={title} onChange={onChangeTitle} className='upload-form__input' type="text" placeholder='Add a title to your video' />
                <h5 className='upload-form__title'>ADD A VIDEO DESCRIPTION</h5>
                <textarea className='upload-form__text' value={description} onChange={onChangeDescription} placeholder='Add a description to your video' name="text" id="" cols="15" rows="5"></textarea>
              </div>
              <div className='upload-form__btn'>
                <Btn  className='btn_publish' text='PUBLISH' type="submit"/>
                <Btn onClick={() => handleNavigateToHome()}className='upload-btn' type="button" text="CANCEL" />
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Upload; 
