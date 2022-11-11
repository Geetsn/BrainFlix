import './Btn.scss';
function Btn(props) {
  
  return <button className={props.className}>{props.text}</button>;
}

export default Btn;