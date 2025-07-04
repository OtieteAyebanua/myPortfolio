import DisplayCard from "./displayCard";
import "./style.css";
const NavigationBar = () => {
  return (
    <DisplayCard>
      <div className="contactBtnContainer">
        <div
          style={{
            textAlign: "center",
            paddingTop: "0.5rem",
            paddingBottom: "2rem",
          }}
        >
          <h1
            className="navName"
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#f4fbfe",
              textShadow: `
        0 0 6px #a855f7,
        0 0 12px #a855f7,
        0 0 24px #a855f7
      `,
              letterSpacing: "0.15rem",
            }}
          >
            OTIETE AYEBANUA
          </h1>
          <p
            className="headerList"
            style={{
              marginTop: "1rem",
              color: "#f4fbfe",
              fontSize: "1.1rem",
              opacity: 0.8,
              textShadow: "0 0 4px #a855f755",
            }}
          >
            Full Stack Developer · Innovative Technologist · Code Monkey
          </p>
        </div>
      </div>
    </DisplayCard>
  );
};

export default NavigationBar;
