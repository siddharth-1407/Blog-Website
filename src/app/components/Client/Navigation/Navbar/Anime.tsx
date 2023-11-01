import { cubicBezier } from 'framer-motion';

export const ListItems = {
	initial: {
		y: '-2rem',
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
		y: '-2rem',
		opacity: 0,
		transition: {
			eas: 'linear',
			delay: 0.1 * i,
		},
	}),
};
export const slide = {
	initial: {
		y: '0',
	},
	slideIn: {
		y: '100%',
		transition: {
			duration: 0.5,
			ease: cubicBezier(0.25, 1, 0.5, 1),
		},
	},
	slideOut: {
		y: '0',

		transition: {
			y: { delay: 0.5, ease: cubicBezier(0.25, 1, 0.5, 1), duration: 1 },
		},
	},
};
export const logo = {
	initial: {
		opacity: 0,
	},
	fadeIn: {
		opacity: 1,
		transition: {
			ease: 'linear',
			duration: 0.8,
			delay: 0.2,
		},
	},
	fadeOut: {
		opacity: 0,
		transition: {
			ease: 'linear',
			delay: 0,
		},
	},
};
export const InnerListItems = {
	initial: {
		y: '-1rem',
		opacity: 0,
	},
	fadeIn: (i: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			ease: 'linear',
			delay: 0.05 * i,
		},
	}),
	fadeOut: (i: number) => ({
		y: '-1rem',
		opacity: 0,
		transition: {
			ease: 'linear',
			delay: 0.05 * i,
		},
	}),
};
export const callToAction = {
	initial: {
		opacity: 0,
		y: '-1.2rem',
	},
	fadeIn: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'linear',
			delay: 0.3,
		},
	},
	fadeOut: {
		opacity: 0,
		y: '-1.2rem',
		transition: {
			ease: 'linear',
			delay: 0,
		},
	},
};
