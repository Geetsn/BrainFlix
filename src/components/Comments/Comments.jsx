import './Comments.scss';

function Comments (props){
const commentData = props.Comments
  return(
    <ul className='comments'>
     {
       commentData?.map((item) => (
         <li key={item.id} className='comment'>
          <div className='comment-image'></div>
            <div className='comment-div__one'>
              <div className='comment-div__two'>
                <h4 className='comment-title'>{item.name}</h4>
                <p className='comment-date'>{new Date(item.timestamp).toLocaleDateString() }</p>
              </div>
              <p className='comment-text'>{item.comment}</p>
            </div>
        </li>
      ))
     }
    </ul>
  );
}

export default Comments;