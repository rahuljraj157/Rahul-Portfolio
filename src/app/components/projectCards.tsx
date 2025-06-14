// 'use client';

// import { motion } from 'framer-motion';

// type Props = {
//   title: string;
//   description: string;
//   image: string;
// };

// export default function ProjectCard({ title, description, image }: Props) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, rotate: 1 }}
//       whileTap={{ scale: 0.95 }}
//       transition={{ type: 'spring', stiffness: 300 }}
//       className="bg-gray-800 rounded-lg shadow-lg cursor-pointer overflow-hidden"
//     >
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-48 object-cover"
//         loading="lazy"
//       />
//       <div className="p-4">
//         <h2 className="text-xl font-semibold mb-2">{title}</h2>
//         <p className="text-gray-300">{description}</p>
//       </div>
//     </motion.div>
//   );
// }

// 'use client';

// import { motion } from 'framer-motion';

// type Props = {
//   title: string;
//   description: string;
//   image: string;
// };

// export default function ProjectCard({ title, description, image }: Props) {
//   return (

    
//     <motion.div
//       className="bg-gray-800 rounded-xl p-4 shadow-lg overflow-hidden"
//       whileHover={{ scale: 1.05, rotate: 1 }} // 👈 animation on hover only
//       transition={{ type: 'spring', stiffness: 300 }}
//     >
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-48 object-cover rounded-lg mb-4"
//       />
//       <h2 className="text-xl font-semibold text-green-300">{title}</h2>
//       <p className="text-gray-300">{description}</p>
//     </motion.div>
//   );
// }


'use client';

import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({ title, description, image, link }: Props) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="bg-gray-800 rounded-xl p-4 shadow-lg overflow-hidden"
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold text-green-300">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </a>
  );
}
