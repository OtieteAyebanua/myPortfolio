import DisplayCard from "./displayCard";

const balls = Array.from({ length: 30 });

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;
const Background = () => {
  return (
    <DisplayCard>
  <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "transparent"
      }}
    >
      <style>
        {`
          @keyframes float-random {
            0% { transform: translate(0, 0); }
            50% { transform: translate(var(--x), var(--y)); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>

      {balls.map((_, i) => {
        const x = `${getRandom(-120, 120)}px`;
        const y = `${getRandom(-120, 120)}px`;
        const duration = getRandom(1.5, 3); // Faster movement
        const delay = getRandom(0, 1.5);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${getRandom(0, 90)}%`,
              left: `${getRandom(0, 90)}%`,
              width: "5px",
              height: " 5px",
              borderRadius: "50%",
              background: "#a855f7",
              boxShadow: `
                0 0 10px #a855f7,
                0 0 20px #a855f7,
                0 0 40px #a855f7,
                0 0 60px #a855f755
              `,
              animation: `float-random ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              ["--x" as any]: x,
              ["--y" as any]: y
            } as React.CSSProperties}
          ></div>
        );
      })}
    </div></DisplayCard>
  );
};

export default Background;
