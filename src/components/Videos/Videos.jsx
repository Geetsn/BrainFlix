import './Videos.scss';
import video from '../../data/videos.json';

function Videos (props) {
  let activeId = props.id;

  return(
    <section className='vids'>
      <h3 className='vids-title'>NEXT VIDEOS</h3>
      {
        video.filter(item => item.id !== activeId).map((video) => (
          <div className='vids-details' onClick = {()=>props.handle(video.id)}>
            <img className='vids-image' src={video.image} />
            <div className='vids-description'>
             <h4 className='vids-description__title'>{video.title}</h4>
             <p className='vids-description__text'>{video.channel}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Videos;