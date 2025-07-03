import DisplayCard from "./displayCard";

const projects = [
  {
    title: "3D Web Experience",
    description:
      "Created immersive Three.js projects for interactive websites.",
    image: "/images/threejs-project.png", // Replace with real path
    link: "https://your-project-link.com",
  },
  {
    title: "Product Visualizer",
    description:
      "Built a dynamic product showcase with WebGL and custom shaders.",
    image: "/images/product-visual.png",
    link: "https://your-other-project.com",
  },
];
const Projects = () => {
  return (
    <DisplayCard>
      <div></div>
      <div
        style={{
          padding: "3rem 1rem",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
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
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#f4fbfe" }}
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
