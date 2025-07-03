import Lottie from "lottie-react";
import OrbAnim from "../assets/man.json";
import DisplayCard from "./displayCard";
const frontendSkills = [
  "React.js",
  "Next.js",
  "React Native",
  "JavaScript",
  "HTML",
  "CSS",
  "Three.js",
];
const whatIDo = [
  {
    icon: "⚡",
    text: "Build sleek, interactive UIs for web and mobile with React, Next.js, and React Native.",
  },
  {
    icon: "🚀",
    text: "Develop blazing-fast PWAs and SPAs that deliver native-like performance.",
  },
  {
    icon: "🔗",
    text: "Integrate powerful cloud services like Firebase, AWS, and DigitalOcean for seamless backend ops.",
  },
];
const WhatIDo = () => {
  return (
    <DisplayCard marginTop="5%">
      {" "}
      <div className="whatIDoCont">
        <div>
          <Lottie animationData={OrbAnim} loop={true} />
        </div>
        <div style={{ width: "80%" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#f4fbfe",
                textShadow: "0 0 8px #a855f7, 0 0 16px #a855f7",
                marginBottom: "0.5rem",
              }}
            >
              What I Do 💻✨
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#f4fbfe",
                maxWidth: "600px",
                margin: "auto",
                lineHeight: 1.6,
                textShadow: "0 0 3px #a855f766",
              }}
            >
              I’m a Full Stack Developer passionate about crafting intelligent,
              engaging, and high-performing software the kind you didn’t know
              you needed, but can’t live without.
            </p>
          </div>
          <div
            style={{
              maxWidth: "500px",
              margin: "auto",
              background: "#1e1e1e",
              border: "1px solid #f4fbfe",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 0 12px #a855f7aa",
              marginBottom:"3%"
            }}
          >
            <h2
              style={{
                color: "#f4fbfe",
                fontSize: "1.5rem",
                marginBottom: "16px",
                borderBottom: "1px solid #a855f7",
                paddingBottom: "8px",
                textShadow: "0 0 6px #a855f7, 0 0 12px #a855f7",
              }}
            >
              Frontend Stack 🚀
            </h2>
            <ul
              style={{ paddingLeft: "1.2rem", color: "#f4fbfe", lineHeight: 2 }}
            >
              {frontendSkills.map((skill, index) => (
                <li
                  key={index}
                  style={{
                    listStyleType: "🌐",
                    textShadow: "0 0 4px #a855f7, 0 0 8px #a855f7",
                  }}
                >
                  <span style={{ marginLeft: "0.5rem" }}>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{maxWidth:"550px", margin: "auto"}}
          >
            <ul style={{ listStyle: "none", paddingLeft: 0,margin:"auto" }}>
              {whatIDo.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    color: "#f4fbfe",
                    fontSize: "1.05rem",
                    lineHeight: "1.7",
                    marginBottom: "1.25rem",
                    textShadow: "0 0 3px #a855f755",
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DisplayCard>
  );
};

export default WhatIDo;
