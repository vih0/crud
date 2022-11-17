
import Check from "../../assets/check.svg";
import Close from "../../assets/close.svg";
import "./index.css";


   function Alert(props) {


  return (
    <div className="Alert">
      
      <img src={Close} alt="close menu icon" className="Close-icon" onClick={props.setOpen}/>
      <div className="container_wrapp">
        <img src={Check} alt="Icon Check" />
        <h2> {props.text}</h2>
      </div>
    </div>
  );

  }

export default Alert;


