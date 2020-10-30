import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	.background-image-movie {
		width: 100%;
		z-index: 0;
	}
	overflow: hidden;
	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000000 100%);
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.poster {
			border-radius: 4px;
		}
		.description {
			color: white;
			p {
				width: 500px;
			}
		}
		.functions {
			button {
				margin: 0 5px;
				border: 0;
				border-radius: 50%;
				padding: 5px;
				:hover {
					svg {
						color: #0db551;
					}
					cursor: pointer;
				}
			}
		}
	}
`;
