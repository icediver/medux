import plugin from 'tailwindcss/plugin';

const primary = '#e30b13';

export const plugins = [
	// require("@tailwindcss/forms"),
	// require("@tailwindcss/aspect-ratio"),
	plugin(({ addComponents, theme, addUtilities, addBase }) => {
		addComponents({
			'.btn-primary': {
				backgroundColor: primary,
				color: '#fff',
				borderRadius: '0.65rem',
				transition: 'background-color .3s ease-in-out',
				'&:hover': {
					backgroundColor: '#ff0009',
				},
			},

			'.text-link': {
				textUnderlineOffset: '4',
				color: 'rgba(255, 255, 255, .9)',
				transition: 'text-decoration-color .3s ease-in-out',
				textDecorationLine: 'underline',
				textDecorationColor: 'rgba(255, 255, 255, 0.2)',
				'&:hover': {
					textDecorationColor: 'rgba(255, 255, 255, 0.9)',
				},
			},

			'.air-block': {
				borderRadius: theme('borderRadius.layout'),
				backgroundColor: theme('colors.gray.950'),
				color: theme('colors.white'),
				boxShadow: theme('boxShadow.lg'),
			},
			'.border-solid-left': {
				'border-left': '1px solid var(--border-schedule)',
			},
			'.border-dashed-bottom': {
				'border-bottom': '1px dashed var(--border-schedule)',
			},
			'.border-dashed-top': {
				'border-top': '1px dashed var(--border-schedule)',
			},
		}),
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
				},

				'.outline-border-none': {
					outline: 'none',
					border: 'none',
				},

				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},

				'.image-like-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none',
				},
				'.scrolbar-hidden': {
					'&::-webkit-scrollbar': {
						display: 'none',
					},
					'-ms-overflow-style': 'none' /* IE and Edge */,
					'scrollbar-width': 'none' /* Firefox */,
				},
				'.transparent-panel': {
					'background-color': 'rgba(9,10,10,0.15)',
					// "background-color": "rgba(0,1,13,0.65)",
					borderRadius: '0.75rem',
					'backdrop-filter': 'blur(20px)',
				},
				'.text-gradient': {
					background: 'linear-gradient(90deg, #c731ef, #fe5f0c) ',
					'-webkit-background-clip': 'text',
					color: 'transparent',
					'-webkit-text-fill-color': 'transparent',
				},
				'.striped': {
					height: '38px',
					'margin-top': '1px',
					background:
						'repeating-linear-gradient( -45deg, var(--bg-light),   var(--bg-light) 10px,   var(--strip) 11px,   var(--strip) 12px)',
				},
				'.weekend': {
					'margin-top': '1px',
					background:
						'repeating-linear-gradient( -45deg, var(--bg-light),   var(--bg-light) 10px,   var(--strip) 11px,   var(--strip) 12px)',
				},
			});
	}),
];
