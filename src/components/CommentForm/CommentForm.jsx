import './CommentForm.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import Btn from '../Btn/Btn';

function CommentForm (props) {
  return(
    <form className='form'>
      <h3 className='form-title'> 3 Comments</h3>
      <div className='form-container'>
          <img className='image' src={avatar} alt="avatar" />
        <div className='form-container__conv'>
          <label className='form-container__title'>JOIN THE CONVERSATION</label>
          <textarea className='form-container__text' name="comment" id="" cols="20" rows="5" placeholder="Add a new comment"></textarea>
          <Btn className='btn_comment' text="COMMENT"/>
        </div>
      </div>
    </form>
  )
}

export default CommentForm;