import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	width: 400px;
	height: 400px;
	border-radius: 4px;
	background: #f1f1f5;
	top: 50%;
	right: 20%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		width: 200px;
		height: auto;
		margin: 10px 0;
		border-radius: 4px;
	}
	input,
	select {
		height: 48px;
		width: 90%;
		border: 0;
		border-radius: 4px;
		background: #ffff;
		padding: 0 15px;
		font-size: 18px;
		margin: 0 0 10px;
	}
`;
