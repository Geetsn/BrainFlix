import './Btn.scss';
function Btn(props) {
  
  return <button onClick = {props.onClick} className={props.className}>{props.text}</button>;
}

export default Btn;