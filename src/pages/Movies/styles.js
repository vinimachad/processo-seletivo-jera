import styled from "styled-components";

export const Container = styled.main`
	position: absolute;
	width: 100%;
	top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	.row-list {
		width: 90%;
		height: min(270px, max(fit-content));
		h1 {
			margin: 60px 0 20px 0;
			font-size: 39px;
			color: #0db551;
		}
		.grid-movies {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
			grid-gap: 20px;
			justify-content: flex-start;
			list-style: none;
			strong {
				color: #020202;
			}
			li {
				cursor: pointer;
				position: relative;
				:hover {
					transition: transform 0.4s ease-in-out;
					transform: scale(1.05);
					z-index: 0;
				}
				.add-my-list {
					border: 0;
					background: transparent;
					cursor: pointer;
					position: absolute;
					right: 0;
					bottom: 50px;
				}
			}
		}
	}
`;
