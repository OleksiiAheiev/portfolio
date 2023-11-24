


// import React from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const AnimatedScroller = ({ children }) => {
//   const controls = useAnimation();

//   const scrollVariants = {
//     start: {
//       x: '100%',
//     },
//     end: {
//       x: '-100%',
//     },
//   };

//   const scrollTransition = {
//     repeat: Infinity,
//     repeatType: 'reverse',
//     duration: 5,
//     ease: 'linear',
//   };

//   React.useEffect(() => {
//     controls.start('end');
//   }, [controls]);

//   return (
//     <motion.div
//       style={{
//         display: 'flex',
//         overflow: 'hidden',
//         width: '100%',
//         height: '100px', // Встановіть висоту за вашими потребами
//       }}
//     >
//       {React.Children.map(children, (child, index) => (
//         <motion.div
//           key={index}
//           initial={{ x: '100%' }}
//           animate={controls}
//           variants={scrollVariants}
//           transition={scrollTransition}
//           style={{
//             flex: '0 0 100%', // Розтягнути на всю ширину
//           }}
//         >
//           {child}
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default AnimatedScroller;
