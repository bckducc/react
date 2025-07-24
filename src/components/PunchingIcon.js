// // src/components/PunchingIcons.js
// import React, { useEffect, useRef } from 'react';
// import './PunchingIcons.css';

// export default function PunchingIcons() {
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);

//   // default and flipped icons
//   const defaultIcon = '😘';
//   const flippedIcon = '😗';

//   useEffect(() => {
//     const left = leftRef.current;
//     const right = rightRef.current;
//     // initialize icons
//     left.textContent = defaultIcon;
//     right.textContent = defaultIcon;

//     let toggle = false;
//     const interval = setInterval(() => {
//       toggle = !toggle;
//       if (toggle) {
//         left.classList.add('punch-left');
//         right.classList.add('punch-right');
//         right.textContent = flippedIcon;  // change right icon when flipped
//       } else {
//         left.classList.remove('punch-left');
//         right.classList.remove('punch-right');
//         right.textContent = defaultIcon;  // revert right icon
//       }
//     }, 600);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="punching-container">
//       <div ref={leftRef} className="icon icon-left"></div>
//       <div ref={rightRef} className="icon icon-right"></div>
//     </div>
//   );
// } () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="punching-container">
//       <div ref={leftRef} className="icon icon-left">👊</div>
//       <div ref={rightRef} className="icon icon-right">👊</div>
//     </div>
//   );


// /* flip right icon horizontally */
// .icon-right {
//   transform: scaleX(-1) !important;
// }
