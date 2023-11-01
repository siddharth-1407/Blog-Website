export const socials = {
	initial: {
		y: '-1.5rem',
		opacity: 0,
	},
	fadeIn: (i: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			ease: 'linear',
			delay: 0.1 * i,
		},
	}),
	fadeOut: (i: number) => ({
		y: '-1.5rem',
		opacity: 0,
		transition: {
			ease: 'linear',
			delay: 0.1 * i,
		},
	}),
};
