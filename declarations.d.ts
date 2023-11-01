declare module 'react' {
	interface DOMAttributes<T> {
		inert?: '' | boolean;
	}
}

declare global {
	namespace JSX {
		interface IntrinsicAttributes {
			inert?: '' | boolean;
		}
	}
}

declare namespace React {
	interface HTMLAttributes<T> {
		inert?: boolean | '';
	}
}
export {};
