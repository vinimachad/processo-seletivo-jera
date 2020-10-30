import styled from "styled-components";

export const Container = styled.header`
	z-index: 1;
	width: 100%;
	height: 80px;
	background: #020202;
	position: fixed;
	top: 0;
	left: 0;
	box-shadow: 1px 1px 14px 0.8px rgba(0, 0, 0, 0.64);
	display: flex;
	justify-content: space-around;
	align-items: center;
	.title {
		font-size: 30px;
		color: #0db551;
	}
	.a-account {
		padding: 10px 10px;
		border: 0;
		background: transparent;
		color: white;
		font-size: 19px;
		border-radius: 4px;
		text-decoration: none;
	}
	.input-search {
		padding: 0 15px;
		width: 230px;
		background: #f1f1f5;
		height: 38px;
		border: 0;
		border-radius: 4px 0 0 4px;
	}
	.btn-search {
		padding: 0 10px;
		height: 38px;
		border: 0;
		background: rgba(255, 255, 255, 0.6);
		border-radius: 0 4px 4px 0;
		color: white;
	}
`;
