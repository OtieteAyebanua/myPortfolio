import DisplayCard from "./displayCard";
import Floating from "../assets/floating.json";
import Lottie from "lottie-react";
const experiences = [
  {
    title: "Frontend Developer",
    company: "AlgoCipher Quantitative (Remote, USA)",
    date: "Jan 2023 – Mar 2024",
    points: [
      "Built and maintained dynamic landing pages, user dashboards, and auth flows using React.js and SCSS.",
      "Improved load speed by 20% using code splitting and lazy loading.",
      "Collaborated with backend engineers to integrate secure APIs.",
      "Enhanced UX across platforms with responsive layouts and accessibility best practices.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Skillgap (Remote, UK)",
    date: "Jul 2023 – Present",
    points: [
      "Led frontend development of a confidential education-based mobile app using React Native.",
      "Worked under NDA; handled component design, animations, Redux, and API consumption.",
      "Participated in daily standups and sprint planning using agile methodology.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "TariOty (Nigeria)",
    date: "Oct 2022 – Dec 2022",
    points: [
      "Designed and developed the brand’s portfolio website with Next.js.",
      "Integrated responsive UI and smooth transitions to improve brand presence.",
      "Conducted SEO optimization and improved mobile performance by 30%.",
    ],
  },
];
const Experiences = () => {
  return (
    <DisplayCard>
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",paddingLeft:"5%",paddingRight:"5%",gap:"10px"}}>
        <div
          style={{ padding: "3rem 1rem", margin: "auto",width:"100%" }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#f4fbfe",
              fontSize: "2rem",
              marginBottom: "2rem",
              textShadow: "0 0 6px #a855f7",
            }}
          >
            Experience 💼
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "2rem",
                  background: "#1e1e1e",
                  borderLeft: "4px solid #a855f7",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  boxShadow: "0 0 10px #a855f777",
                }}
              >
                <div
                  style={{
                    flex: "0 0 200px",
                    color: "#f4fbfe",
                    fontWeight: 600,
                  }}
                >
                  <div style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    {exp.title}
                  </div>
                  <div style={{ color: "#a855f7", fontSize: "0.95rem" }}>
                    {exp.company}
                  </div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
                    {exp.date}
                  </div>
                </div>

                <ul
                  style={{
                    color: "#f4fbfe",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    paddingLeft: "1.2rem",
                    margin: 0,
                  }}
                >
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Lottie animationData={Floating} loop={true} />
        </div>
      </div>
    </DisplayCard>
  );
};

export default Experiences;
