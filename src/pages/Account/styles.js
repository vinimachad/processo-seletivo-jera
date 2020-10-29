import styled from "styled-components";
export const Container = styled.section`
	width: 100%;
	height: 100vh;
	background: #020202;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.choose-accounts {
		width: 600px;
		height: 300px;
		margin: 0 0 0 10px 0;
		ul {
			display: flex;
			justify-content: space-around;
			.card-account {
				cursor: pointer;
				border: 0;
				background: transparent;
				display: flex;
				flex-direction: column;
				align-items: center;
				.image-face {
					width: 200px;
					height: 200px;
					object-fit: cover;
					object-position: center;
					border-radius: 4px;
					border: 0;
				}
				.name {
					color: white;
					margin: 5px 0;
				}
			}
		}
	}
`;
