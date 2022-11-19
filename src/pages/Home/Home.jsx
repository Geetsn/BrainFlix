import './Home.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import viewIcon from '../../assets/Icons/views.svg';
import likeIcon from '../../assets/Icons/likes.svg';
import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/CommentForm/CommentForm';
import Videos from '../../components/Videos/Videos';
import axios from 'axios';


function Home (props) {
  const {id} = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [allVideos, setAllVideos] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:8080/videos').then(response => {
     setAllVideos(response.data)
     console.log("get all videos", response.data);
    }).catch(error => 
      console.log(error));
  }, []);

  useEffect(() => {
    let videoId = id || allVideos[0]?.id;
    if (videoId) {
      axios.get(`http://localhost:8080/videos/${videoId}`).then(response => {
        setActiveVideo(response.data)
        console.log("get one specific video", response.data);
      });
    }
   }, [id, allVideos]);
   console.log(allVideos)
   console.log(activeVideo);

  return (
    <section className='home'>
      <video className='home-image' poster={activeVideo?.image} controls></video>
      <div className='home_part'>
        <div className='home_part_descCom'>
          <h1 className='home-title'>{activeVideo?.title}</h1>
          <div className='home-details'>
            <div className='home-detail'>
              <h4 className='home-detail__subtitle'>By {activeVideo?.channel}</h4>
              <p className='home-detail__date'>{new Date(activeVideo?.timestamp).toLocaleDateString() }</p>
            </div>
            <div className='home-detail'>
              <p className='home-detail__views'><img src={viewIcon} alt=""/> {activeVideo?.views}</p>
              <p className='home-details__likes'><img src={likeIcon} alt=''/>&nbsp;{activeVideo?.likes}</p>
            </div>
          </div>
          <p className='home-text'>{activeVideo?.description}</p>
          <CommentForm />
          <Comments Comments={activeVideo?.comments} />
        </div>
       <Videos id={activeVideo?.id} videos={allVideos} />
      </div>
    </section>
  )
}

export default Home;