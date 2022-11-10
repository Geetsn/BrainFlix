import './Home.scss';
import { useState } from 'react';
import viewIcon from '../../assets/Icons/views.svg';
import likeIcon from '../../assets/Icons/likes.svg';
import videosData from '../../data/video-details.json';
import Comments from '../Comments/Comments';
import CommentForm from '../CommentForm/CommentForm';
import Videos from '../Videos/Videos';


function Home (props) {
  const [activeVideo, setActiveVideo] = useState(videosData[0]);

  // wont need this part
  const handleVideoClick = (id) => {
    const foundVideo = videosData.find(videoObject => videoObject.id === id);
    setActiveVideo(foundVideo);
  }
  return (
    <section className='home'>
      <video className='home-image' poster={activeVideo.image} controls></video>
      <div className='home_part'>
        <div className='home_part_descCom'>
          <h1 className='home-title'>{activeVideo.title}</h1>
          <div className='home-details'>
            <div className='home-detail'>
              <h4 className='home-detail__subtitle'>By {activeVideo.channel}</h4>
              <p className='home-detail__date'>{new Date(activeVideo.timestamp).toLocaleDateString() }</p>
            </div>
            <div className='home-detail'>
              <p className='home-detail__views'><img src={viewIcon}/> {activeVideo.views}</p>
              <p className='home-details__likes'><img src={likeIcon}/>&nbsp;{activeVideo.likes}</p>
            </div>
          </div>
          
          <p className='home-text'>{activeVideo.description}</p>
          <CommentForm />
          <Comments Comments={activeVideo.comments} />
        </div>
          
        <Videos id={activeVideo.id} handle={handleVideoClick} />
      </div>
    </section>

  )
}

export default Home;