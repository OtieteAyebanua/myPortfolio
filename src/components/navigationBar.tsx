import DisplayCard from "./displayCard";
import './style.css'
const NavigationBar = () => {
  return (
    <DisplayCard>
      <div className="contactBtnContainer">
        <button
        className="contactBtn"
          style={{
            color:"#f4fbfe",
            fontFamily:"inter",
            fontSize:16,
            fontWeight:600,
            borderRadius:3,
            padding:3,
            paddingLeft:5,
            paddingRight:5
          }}
        >
          Contact
        </button>
      </div>
    </DisplayCard>
  );
};

export default NavigationBar;
