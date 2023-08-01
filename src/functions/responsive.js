import { css } from "styled-components";

export const mobile = (props) => {
	return css`
		@media (max-width: 720px) {
			${props}
		}
	`;
};

export const tablet = (props) => {
	return css`
		@media (max-width: 1200px) {
			${props}
		}
	`;
};

export const dark = (props) => {
	return css`
		@media (prefers-color-scheme: dark) {
			${props}
		}
	`;
};
