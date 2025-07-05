import DisplayCard from "./displayCard";

const projects = [
  {
    title: "🌍 3D Earth Experience",
    description:
      "Crafted immersive web experiences inspired by Earth, blending interactive design with rich 3D visuals.",
    link: "",
  },
  {
    title: "🤖 Expert Advisor Bot",
    description:
      "Developed a customizable algorithmic trading bot that automates execution, processes signals, and deploys strategies across various markets.",
  },
  {
    title: "🎞️ Video Encoding Engine",
    description:
      "Built a high-performance engine that converts raw video footage into lightweight, high-quality MP4 files efficiently.",
    link: "",
  },
  {
    title: "🚀 AlgoCipher Website",
    description: "Designed and launched the official landing page for AlgoCipher, showcasing its features, tools, and trading solutions.",
    link: "https://algocipherquantitative.com/",
  },
  {
    title: "🧩 TariOty Portfolio",
    description: "Created a sleek and modern portfolio platform for TariOty, highlighting its services and creative works.",
    link: "https://tarioty.vercel.app/",
  },
  {
    title: "🎮 SkillGap Platform",
    description: "Engineered a web application that enables gamers to create, join, and bet on contests in a competitive environment.",
    link: "",
  },
  {
    title: "🗣️ Voice Assistant",
    description: "Built a smart web assistant to help users track time, set reminders, and manage daily events seamlessly.",
    link: "",
  },
  {
    title: "📞 Voice Over IP (VoIP)",
    description: "Implemented a real-time voice communication app using WebSocket for smooth, browser-based audio calls.",
    link: "",
  },
  {
    title: "🖼️ Image Difference Algorithm",
    description: "Developed an algorithm to accurately detect and display visual differences between two images.",
    link: "",
  },
  {
    title: "📬 UNN Mail Newsletter",
    description: "Created a modern newsletter web app for my university to streamline communication and announcements.",
    link: "",
  },
];
const Projects = () => {
  return (
    <DisplayCard>
      <div
        className="MPC"
        style={{
          padding: "3rem 1rem",
          margin: "auto",
        }}
      >
        <h2
          className="MPW"
          style={{
            textAlign: "center",
            color: "#f4fbfe",
            fontSize: "2rem",
            marginBottom: "2.5rem",
            textShadow: "0 0 6px #a855f7",
          }}
        >
          My Projects 🛠️
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, index) => (
            <a
              className="MPcard"
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#f4fbfe",position:"relative",zIndex:9999  }}
            >
              <div
                className="shake-on-hover"
                style={{
                  background: "#1e1e1e",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 0 20px #a855f766",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <h3
                    style={{
                      marginBottom: "8px",
                      fontSize: "1.25rem",
                      color: "#a855f7",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </DisplayCard>
  );
};

export default Projects;
