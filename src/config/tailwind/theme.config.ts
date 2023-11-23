import tailwindStandartColors from 'tailwindcss/colors';

export const colors = {
	...tailwindStandartColors,
	background: 'var(--background)',
	'bg-light': 'var(--bg-light)',
	'hover-phone': 'var(--hover-phone)',
	primary: 'var(--primary)',
	logo: 'var(--logo)',
	inactive: 'var(--inactive)',
	avatar: 'var(--avatar)',
	emergency: 'var(--emergency)',
	'emergency-text': 'var(--emergency-text)',
	'error-color': 'var(--error-color)',
	'border-schedule': 'var(--border-schedule)',
	warning: '#F1D399',
	'emergency-appointment': 'var(--emergency-appointment)',
	'emergency-border': 'var(--emergency-border)',
	'examination-appointment': 'var(--examination-appointment)',
	'examination-border': 'var(--examination-border)',
	'consultation-appointment': 'var(--consultation-appointment)',
	'consultation-border': 'var(--consultation-border)',

	'routine-appointment': 'var(--routine-appointment)',
	'routine-border': 'var(--routine-border)',
	'sick-appointment': 'var(--sick-appointment)',
	'sick-border': 'var(--sick-border)',
	'patient-item': 'var(--patient-item)',
	messages: 'var(--messages)',
	'message-border': 'var(--message-border)',
};
export const theme = {
	colors,
	extend: {
		fontSize: {
			xss: '0.625rem',
			xs: '0.7rem',
			sm: '0.82rem',
			base: '1rem',
			lg: '1.15rem',
			xl: '1.22rem',
			'1.25xl': '1.36rem',
			'1.5xl': '1.5rem',
			'1.75xl': '1.75rem',
			'2xl': '2rem',
			'3xl': '2.155rem',
			'4xl': '2.58rem',
			'5xl': '3.45rem',
			'6xl': '4.3rem',
			'7xl': '5.17rem',
			'8xl': '6.9rem',
			'9xl': '9.2rem',
		},
		fontFamily: {
			roboto: 'var(--font-roboto)',
			rubik: 'var(--font-rubik)',
		},
		keyframes: {
			animationOpacity: {
				from: { opacity: '0.2' },
				to: { opacity: '1' },
			},
			scaleIn: {
				'0%': {
					opacity: '0',
					transform: 'scale(0.9)',
				},
				'50%': {
					opacity: '0.3',
				},
				'100%': {
					opacity: '1',
					transform: 'scale(1)',
				},
			},
			width: {
				from: {
					width: '0',
				},
				to: {
					width: '100%',
				},
			},
		},

		animation: {
			opacity: 'animationOpacity 0.7s ease-in-out',
			scaleIn: 'scaleIn .35s ',
			width: 'width 1s ease-in-out',
		},
		gridTemplateColumns: {
			// Простая сетка из 16 столбцов
			16: 'repeat(16, minmax(0, 1fr))',
			18: 'repeat(18, minmax(0, 1fr))',
			19: 'repeat(19, minmax(0, 1fr))',
			26: 'repeat(26, minmax(0, 1fr))',
		},
		backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			'gradient-conic':
				'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		},
		aspectRatio: {
			'4/3': '16 / 11',
		},
	},
};
