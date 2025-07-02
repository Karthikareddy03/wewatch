// // // /** @type {import('tailwindcss').Config} */
// // // export default {
// // //   content: [
// // //     "./index.html",
// // //     "./src/**/*.{js,ts,jsx,tsx}",
// // //   ],
// // //   theme: {
// // //     extend: { 
// // //       colors:{
// // //         primary:"#071952"
// // //       }
// // //     },
// // //   },
// // //   plugins: [],
// // //   corePlugins:{
// // //     preflight:false,
// // //   }
// // // }
// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,jsx,ts,tsx}",
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         blush: "#ffb6c1",   // Soft Pink
//         rose: "#f472b6",    // Tailwind Rose-400
//         candy: "#f9a8d4",   // Baby Pink
//         peony: "#ffe4e6",   // Pale Pink Background
//       },
//       fontFamily: {
//         sans: ["'Quicksand'", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: require('tailwindcss/colors').rose,
      }
    },
  },
  plugins: [],
}
