import DisplayCard from "./displayCard";
import VrTechGuy from "../assets/vrtechguy.json";
import Lottie from "lottie-react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
const socialLinks = [
  { icon: Github, url: "https://github.com/OtieteAyebanua", bg: "#24292e" },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/otiete-ayebanua-4a09772a5/",
    bg: "#0077B5",
  },
  { icon: Mail, url: "ayebanuaotiete@gmail.com", bg: "#EA4335" },
  { icon: Twitter, url: "https://x.com/TheCodeMonkey_", bg: "#24292e" },
];

const Header = () => {
  return (
    <DisplayCard>
      <div className="headerContainer">
        <div className="headerLeft">
          <h1 className="headerName">
            {"Mid Level Software".split("").map((char, index) => (
              <span
                key={index}
                className="wave"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  display: char === " " ? "inline-block" : undefined,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <br />
            {"Developer".split("").map((char, index) => (
              <span
                key={index + 100}
                className="wave"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  display: char === " " ? "inline-block" : undefined,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <h5 className="headerSummary">
            A passionate Software Developer 🚀 having an experience of building
            Web and Mobile applications with Dot.Net / JavaScript / React.js /
            Node.js / React Native and some other cool libraries and frameworks.
          </h5>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px",position:"relative",zIndex:9999 }}>
            {socialLinks.map(({ icon: Icon, url, bg }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: bg,
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: "30px",
              position: "relative",
              top: "20px",
            }}
          >
            <a href="src\assets\Otiete_Ayebanua_Resume.pdf" download>
              <button className="downloadMyResume">DOWNLOAD MY RESUME</button>
            </a>
          </div>
        </div>
        <div className="headerLottie">
          <Lottie animationData={VrTechGuy} loop={true} />
        </div>
      </div>
    </DisplayCard>
  );
};

export default Header;
