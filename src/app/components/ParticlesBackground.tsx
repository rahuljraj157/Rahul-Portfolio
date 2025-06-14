// import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const ParticlesBackground = () => {
//   const particlesInit = async (container: any) => {
//     await loadFull(container);
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: { color: { value: "#000" } },
//         particles: {
//           number: { value: 50 },
//           color: { value: "#fff" },
//           move: { enable: true, speed: 2 },
//         },
//       }}
//     />
//   );
// };

// export default ParticlesBackground;
// import React from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const ParticlesBackground = () => {
//   const particlesInit = async (engine: any) => {
//     await loadSlim(engine); // changed from loadFull to loadSlim
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: { color: { value: "#000" } },
//         particles: {
//           number: { value: 50 },
//           color: { value: "#fff" },
//           move: { enable: true, speed: 2 },
//           size: { value: 3 },
//           links: {
//             enable: true,
//             color: "#fff",
//             distance: 150,
//           },
//         },
//       }}
//     />
//   );
// };

// export default ParticlesBackground;

import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#000" } },
        particles: {
          number: { value: 50 },
          color: { value: "#fff" },
          move: { enable: true, speed: 2 },
          size: { value: 3 },
          links: {
            enable: true,
            color: "#fff",
            distance: 150,
          },
        },
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ParticlesBackground;
