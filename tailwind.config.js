/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			backgroundColor: {
				"light-red-custom": "hsla(0, 100%, 67%,0.1)",
				"orange-yellow-custom": "hsla(39, 100%, 56%,0.1)",
				"green-teal-custom": "hsla(166, 100%, 37%,0.1)",
				"cobalt-blue-custom": "hsla(234, 85%, 45%,0.1)",
			},
			colors: {
				"light-red": "hsl(0, 100%, 67%)",
				"orange-yellow": "hsl(39, 100%, 56%)",
				"green-teal": "hsl(166, 100%, 37%)",
				"cobalt-blue": "hsl(234, 85%, 45%)",
				"light-slade-blue": "hsl(252, 100%, 67%)",
				"light-royal-blue": "hsl(241, 81%, 54%)",
				"dark-gray-blue": "hsl(224, 30%, 27%)",
				"light-lavender": "hsl(241, 100%, 89%)",
				"violet-blue": "hsla(256, 72%, 46%, 1)",
				"persian-blue" : "hsla(241, 72%, 46%, 0)"
			},
			boxShadow: {
				"custom": "5px 15px 2em 0px hsla(241, 72%, 46%, 0)"
			},
			boxShadowColor: {
				"custom-color": "hsl(241, 100%, 89%)"
			}
		},
	},
	plugins: [],
}

