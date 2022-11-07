import './CommentForm.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import Btn from '../Btn/Btn';

function CommentForm (props) {
  return(
    <div >
      <h3 className='form-title'> 3 Comments</h3>
      <form className='form'>
        <div className='form-container'>
          <img className='image' src={avatar} alt="avatar" />
        </div>
        <div className='form-container__conv'>
          <h4 className='form-container__title'>JOIN THE CONVERSATION</h4>
          <textarea className='form-container__text' name="comment" id="" cols="20" rows="5" placeholder="Add a new comment"></textarea>
          <Btn className='btn_comment' text="COMMENT"/>
        </div>
      </form>
    </div>
  )
}

export default CommentForm;
