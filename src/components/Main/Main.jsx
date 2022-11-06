import './Main.scss';
import { useState } from 'react';
import viewIcon from '../../assets/Icons/views.svg';
import likeIcon from '../../assets/Icons/likes.svg';
import videosData from '../../data/video-details.json';
import Comments from '../Comments/Comments';
import CommentForm from '../CommentForm/CommentForm';
import Videos from '../Videos/Videos';


function Main (props) {
  const [activeVideo, setActiveVideo] = useState(videosData[0]);

  const handleVideoClick = (id) => {
    const foundVideo = videosData.find(videoObject => videoObject.id === id);
    setActiveVideo(foundVideo);
  }
  return (
    <section className='main'>
      <video className='main-image' poster={activeVideo.image} controls></video>
      <h1 className='main-title'>{activeVideo.title}</h1>
      <div className='main-details'>
        <div className='main-detail'>
          <h4 className='main-detail__subtitle'>By {activeVideo.channel}</h4>
          <p className='main-detail__date'>{new Date(activeVideo.timestamp).toLocaleDateString() }</p>
        </div>
        <div className='main-detail'>
          <p className='main-detail__views'><img src={viewIcon}/> {activeVideo.views}</p>
          <p className='main-details__likes'><img src={likeIcon}/>{activeVideo.likes}</p>
        </div>
      </div>
      <p className='main-text'>{activeVideo.description}</p>
      <CommentForm />
      <Comments Comments={activeVideo.comments} />
      <Videos id={activeVideo.id} handle={handleVideoClick} />
    </section>

  )
}

export default Main;