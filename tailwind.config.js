/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	colors: {
        primary: "#2CC995",
        secondary: "#245E49",
        accent: "#DD3F7D",
        white: "#FAFAFA",
        navigationblue: "#236EA4",
        danger: "#FF3C4F",
        "black-900": "#111318",
        "black-800": "#1C1D21",
        "black-700": "#25272C",
        "black-600": "#333333",
        "grey-600": "#4B4E58",
        "grey-500": "#666666",
        "grey-450": "#7A7A7A",
        "grey-400": "#A3A3A3",
      },
	plugins: [],
};
