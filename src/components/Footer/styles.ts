import styled from "styled-components";

export const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.footer};
	color: ${({ theme }) => theme.colors.primary};
	padding: 2rem 0;
	z-index: 2;
`;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	max-width: 1300px;

	@media (max-width: 400px) {
		flex-direction: column;
	}
`;

export const Items = styled.div`
	> h1 {
		font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
		font-size: 2.4rem;
		font-weight: 600;
	}

	> p {
		font-size: 1.4rem;
		font-weight: 200;
		padding: 0.4rem 0;
	}
`;

export const Theme = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors["button-hover"]};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 7px;
	box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
	padding: 0.2rem 1rem;

	> svg {
		font-size: 2.8rem;
		padding: 0 0.6rem;
	}

	@media (max-width: 400px) {
		margin: 2rem 0 0 0;
	}
`;
