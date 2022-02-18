import React from "react";
import Particles from "react-tsparticles";
import useColor from "../../utils/useColor";

export default function Background() {
  const { pick } = useColor();
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          color:
            pick("#4a8cff", "#2bfafa")
          ,
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
      height="100vh"
    />
  );
}
