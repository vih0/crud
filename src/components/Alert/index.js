import Check from "../../assets/check.svg";
import Close from "../../assets/close.svg";
import "./index.css";

function Alert(props) {
    const closeMenu = () => {
        let closeIcon = document.querySelector('.Close-icon')
        
        closeIcon.addEventListener('click', (e) => {
            console.log(closeIcon.target) 
        })

    }
  return (
    <div className="Alert">
      <img src={Close} alt="close menu icon" className="Close-icon" onClick={closeMenu} />
      <div className="container_wrapp">
        <img src={Check} alt="Icon Check" />
        <h2> {props.title} com Sucesso</h2>
      </div>
    </div>
  );
}
export default Alert;
