const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#141414",
        padding: "2rem 1rem",
        borderTop: "1px solid #a855f722",
        color: "#f4fbfe",
        textAlign: "center",
        textShadow: "0 0 4px #a855f7",
      }}
    >
      <div
        className="madeBy"
        style={{ fontSize: "1.2rem", marginBottom: "1rem" }}
      >
        Made with 💻 & 💙 by <strong>Otiete Ayebanua</strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <a
          className="links"
          href="https://github.com/OtieteAyebanua"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f4fbfe", fontSize: "1.25rem" }}
        >
          GitHub
        </a>
        <a
          className="links"
          href="https://www.linkedin.com/in/otiete-ayebanua-4a09772a5/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f4fbfe", fontSize: "1.25rem" }}
        >
          LinkedIn
        </a>
        <a
          className="links"
          href="https://x.com/TheCodeMonkey_"
          style={{ color: "#f4fbfe", fontSize: "1.25rem" }}
        >
          Twitter
        </a>
        <a
          className="links"
          href="ayebanuaotiete@gmail.com"
          style={{ color: "#f4fbfe", fontSize: "1.25rem" }}
        >
          Email
        </a>
      </div>

      <small style={{ opacity: 0.6, fontSize: "10px" }}>
        &copy; {new Date().getFullYear()} Otiete Ayebanua. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
