import './Videos.scss';
import { Link } from 'react-router-dom';

function Videos (props) {
  let activeId = props.id;

  return(
    <section className='vids'>
      <h3 className='vids-title'>NEXT VIDEOS</h3>
      {
        props.videos.filter(item => item.id !== activeId).map((video) => (
          <div key={video.id} className='vids-details'>
            <Link className='vids-details__section' to={`/video/${video.id}`}>
              <img className='vids-image' src={video.image} alt=""/>
                <div className='vids-description'>
                  <h4 className='vids-description__title'>{video.title}</h4>
                  <p className='vids-description__text'>{video.channel}</p>
                </div>
            </Link>
          </div>
        ))
      }
    </section>
  )
}

export default Videos;