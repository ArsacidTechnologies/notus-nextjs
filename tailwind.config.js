// const plugin = require("tailwindcss/plugin");
// const colors = require("tailwindcss/colors");

// module.exports = {
//   purge: {
//     enabled: true,
//     content: ["./**/*.html", "./*.html", "./**/*.js", "./*.js"],
//     options: {
//       safelist: [],
//     },
//   },
//   theme: {
//     colors: {

//       brand:{
//         'yellow' 	:	'#FFC500',
//         'green'		:	'#B4FE98',
//         'cyan'		:	'#77E4D4',
//         'purple'	:	'#998CEB',	
//         'red'		:	'#EF4F4F',	
//         'cream'		:	'#fff0f0'
//       },
//       wipro:{
//         'green'		:	'#A4CE4F',
//         'blue'		:	'#54BAB9',
//         'darkblue'	:	'#053674',
//         'darkred'	:	'#B4156E',
//         'darkyellow':	'#FFC412',
//         'darkpurple':	'#301157',
//         'platinblue':	'#000333',
//         'cream'		:	'#F7ECDE'

//       },
//       pallet1:{
//         'pink'		:	'#FF0075',
//         'navy'		:	'#172774',
//         'green'		:	'#77D970',
//         'silver'	:	'#EEEEEE'
//       },
//       pallet2:{
//         'cyan'		:	'#00EAD3',
//         'cream'		:	'#FFF5B7',
//         'pink'		:	'#FF449F',
//         'navy'		:	'#005F99'
//       },


//     },
//     extend: {
//       minHeight: {
//         "screen-75": "75vh",
//       },
//       fontSize: {
//         55: "55rem",
//       },
//       opacity: {
//         80: ".8",
//       },
//       zIndex: {
//         2: 2,
//         3: 3,
//       },
//       inset: {
//         "-100": "-100%",
//         "-225-px": "-225px",
//         "-160-px": "-160px",
//         "-150-px": "-150px",
//         "-94-px": "-94px",
//         "-50-px": "-50px",
//         "-29-px": "-29px",
//         "-20-px": "-20px",
//         "25-px": "25px",
//         "40-px": "40px",
//         "95-px": "95px",
//         "145-px": "145px",
//         "195-px": "195px",
//         "210-px": "210px",
//         "260-px": "260px",
//       },
//       height: {
//         "95-px": "95px",
//         "70-px": "70px",
//         "350-px": "350px",
//         "500-px": "500px",
//         "600-px": "600px",
//       },
//       maxHeight: {
//         "860-px": "860px",
//       },
//       maxWidth: {
//         "100-px": "100px",
//         "120-px": "120px",
//         "150-px": "150px",
//         "180-px": "180px",
//         "200-px": "200px",
//         "210-px": "210px",
//         "580-px": "580px",
//       },
//       minWidth: {
//         "140-px": "140px",
//         48: "12rem",
//       },
//       backgroundSize: {
//         full: "100%",
//       },
//     },
//   },
//   variants: [
//     "responsive",
//     "group-hover",
//     "focus-within",
//     "first",
//     "last",
//     "odd",
//     "even",
//     "hover",
//     "focus",
//     "active",
//     "visited",
//     "disabled",
//   ],
//   plugins: [
//     require("@tailwindcss/forms"),
//     plugin(function ({ addComponents, theme }) {
//       const screens = theme("screens", {});
//       addComponents([
//         {
//           ".container": { width: "100%" },
//         },
//         {
//           [`@media (min-width: ${screens.sm})`]: {
//             ".container": {
//               "max-width": "640px",
//             },
//           },
//         },
//         {
//           [`@media (min-width: ${screens.md})`]: {
//             ".container": {
//               "max-width": "768px",
//             },
//           },
//         },
//         {
//           [`@media (min-width: ${screens.lg})`]: {
//             ".container": {
//               "max-width": "1024px",
//             },
//           },
//         },
//         {
//           [`@media (min-width: ${screens.xl})`]: {
//             ".container": {
//               "max-width": "1280px",
//             },
//           },
//         },
//         {
//           [`@media (min-width: ${screens["2xl"]})`]: {
//             ".container": {
//               "max-width": "1280px",
//             },
//           },
//         },
//       ]);
//     }),
//   ],
// };
module.exports = {
	content: [
		'./components/**/*.js',
		'./pages/**/*.js'],
	theme: {
		extend: {
			sepia: {
				25: '.25',
				75: '.75',},
				
			blur: {
				xs: '1px',
			  },
			transitionProperty: {
				left: "left",},
			colors:{
				brand:{
					'yellow' 	:	'#FFC500',
					'green'		:	'#B4FE98',
					'cyan'		:	'#77E4D4',
					'purple'	:	'#998CEB',	
					'red'		:	'#EF4F4F',	
					'cream'		:	'#fff0f0'
				},
				wipro:{
					'green'		:	'#A4CE4F',
					'blue'		:	'#54BAB9',
					'darkblue'	:	'#053674',
					'darkred'	:	'#B4156E',
					'darkyellow':	'#FFC412',
					'darkpurple':	'#301157',
					'platinblue':	'#000333',
					'cream'		:	'#F7ECDE'

				},
				pallet1:{
					'pink'		:	'#FF0075',
					'navy'		:	'#172774',
					'green'		:	'#77D970',
					'silver'	:	'#EEEEEE'
				},
				pallet2:{
					'cyan'		:	'#00EAD3',
					'cream'		:	'#FFF5B7',
					'pink'		:	'#FF449F',
					'navy'		:	'#005F99'
				}
				

			},
			spacing: {
				'11px': '11px',
				'100' : '25rem',	
				'128': '32rem',
				'140': '38rem',
			},fontFamily:{
				'Vazir' :['Vazir'],
				'Vazir-Bold' : ['Vazir-Bold'],
				'Vazir-Light' :['Vazir-Light'],
				'Vazir-Medium' : ['Vazir-Medium'],
				'Vazir-Thin' : ['Vazir-Thin'],					


			},fontSize:{
				'8px'	:	'8px',
				'9px'	:	'9px',
				'10px'	:	'10px',
				'11px'	:	'11px',
				'12px'	:	'12px',
				'13px'	:	'13px',
				'14px'	:	'14px',
				'15px'	:	'15px',
				'16px'	:	'16px',
				'17px'	:	'17px',
				'18px'	:	'18px',
				'19px'	:	'19px',
				'20px'	:	'20px',
				'21px'	:	'21px',
				'22px'	:	'22px',
				'23px'	:	'23px',
				'24px'	:	'24px',
				'25px'	:	'25px',
				'26px'	:	'26px',
				'27px'	:	'27px',
				'28px'	:	'28px',
				'30px'	:	'30px',	
				'32px'	:	'32px',	
				'34px'	:	'34px',	
				'36px'	:	'36px',	
				'40px'	:	'40px',	
				'42px'	:	'42px',	
			}


		},
		container: {
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			
		},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' ),
		// require('tailwindcss-rtl')

	]
}