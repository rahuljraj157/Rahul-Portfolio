// import ProjectCard from "../components/projectCards";

// const projects = [
//   {
//     id: 1,
//     title: 'Career-up',
//     description: 'This is my socialmedia job-portal.',
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlbPoU1MLqYWa-CQzP2dcdwEWyms44rlgWYJ5q1jwLNQmTjamU5Gz87A&s",
//     link: "https://career-upp-bz9i.onrender.com",  // 🔁 add this
//   },
//   {
//     id: 2,
//     title: 'Dreamfurnii',
//     description: 'This is Dreamfurnii my online furniture store.',
//     image: 'https://i.pinimg.com/736x/2e/a6/a0/2ea6a013f7115a7762782af84309afcb.jpg',
//     link: "https://dreamfurnii.onrender.com",
//   },
//    {
//     id: 3,
//     title: 'Project Three',
//     description: 'Netflix live clone',
//     image: 'https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940',
//      link: "http://mynetflix-opal.vercel.app",
//   },
//    {
//     id: 4,
//     title: 'Project Four',
//     description: 'OLX clone and by clicking you can see my git.',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OLX-Logo.png/800px-OLX-Logo.png',
//      link: "https://github.com/rahuljraj157/olx-clone",
//   },
//   {
//     id: 5,
//     title: 'Project Five',
//     description: 'Disney git hub liv link.',
//     image: "https://wallpapers.com/images/hd/plain-disney-logo-106q9ki6xks27ymi.jpg",
//      link: "https://github.com/rahuljraj157/disney",
//   }, {
//     id: 6,
//     title: 'Project Six',
//     description: 'lazza icecream official website clone.',
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkfRKZEpJFtSmpBp7j1FsUpTAj4SqYDF4WQ&s",
//      link: "https://github.com/rahuljraj157/laza3",
//   },{
//     id: 6,
//     title: 'Project Seven',
//     description: 'videocall mini website.',
//     image: "https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-vector-illustration-of-a-flat-design-video-call-icon-with-thin-lines-representing-a-technology-concept-vector-png-image_47182212.jpg",
//      link: "https://github.com/rahuljraj157/videocall-app",
//   },

//   // Add more
// ];

// export default function MyProjects() {
//   return (
//     <section className="min-h-screen p-8 bg-gray-900 text-white">
//       <h1 className="text-4xl font-bold mb-10 text-center">My-Works</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <ProjectCard key={project.id} {...project} />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import ProjectCard from "../components/projectCards";

const projects = [
  {
    id: 1,
    title: 'Career-up',
    description: 'This is my socialmedia job-portal.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlbPoU1MLqYWa-CQzP2dcdwEWyms44rlgWYJ5q1jwLNQmTjamU5Gz87A&s",
    link: "https://career-upp-bz9i.onrender.com",  // 🔁 add this
  },
  {
    id: 2,
    title: 'Dreamfurnii',
    description: 'This is Dreamfurnii my online furniture store.',
    image: 'https://i.pinimg.com/736x/2e/a6/a0/2ea6a013f7115a7762782af84309afcb.jpg',
    link: "https://dreamfurnii.onrender.com",
  },
   {
    id: 3,
    title: 'Netflix',
    description: 'Netflix live clone',
    image: 'https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940',
     link: "http://mynetflix-opal.vercel.app",
  },
   {
    id: 4,
    title: 'OLX clone',
    description: 'OLX clone and by clicking you can see my git.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OLX-Logo.png/800px-OLX-Logo.png',
     link: "https://github.com/rahuljraj157/olx-clone",
  },
  {
    id: 5,
    title: 'Disney static',
    description: 'Disney git hub liv link.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0lfv-YhEItbi3GOLb8IXLrVQCt58Uo12lQ&s",
     link: "https://github.com/rahuljraj157/disney",
  }, {
    id: 6,
    title: 'Lazza',
    description: 'lazza icecream official website clone.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkfRKZEpJFtSmpBp7j1FsUpTAj4SqYDF4WQ&s",
     link: "https://github.com/rahuljraj157/laza3",
  },{
    id: 6,
    title: 'PVideo-Call clone',
    description: 'videocall mini website.',
    image: "https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-vector-illustration-of-a-flat-design-video-call-icon-with-thin-lines-representing-a-technology-concept-vector-png-image_47182212.jpg",
     link: "https://github.com/rahuljraj157/videocall-app",
  },

  // Add more
];

export default function MyProjects() {
  const [showAll, setShowAll] = useState(false);

  // Decide which projects to display
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">My‑Works</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* Show the toggle button only if there are more than 4 projects */}
      {projects.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            suppressHydrationWarning
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}




