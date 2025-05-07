export const RADIUS = 90; // controls size of the layout

export const getPositionStyle = (index, total, radius) => {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2; // start from top
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return {
    position: 'absolute',
    left: `calc(50% + ${x}px - 50px)`, // adjust for icon width
    top: `calc(50% + ${y}px - 50px)`, // adjust for icon height
  };
};

// export const getArrowPosition = (index, total, radius) => {
//   const angle = (2 * Math.PI * index) / total - Math.PI / 6;
//   const x = radius * Math.cos(angle); // Adjust to position between icons
//   const y = radius * Math.sin(angle);

//   return {
//     position: 'absolute',
//     left: `calc(50% + ${x}px)`,
//     top: `calc(50% + ${y}px)`,
//     transform: `rotate(${angle + Math.PI / 2}rad)`, // Rotate arrow in correct direction
//   };
// };
