import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.main`
	background: #020202;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		font-size: 36px;
		color: #0db551;
	}
`;

export const Direct = styled(Link)`
	background: #0db551;
	width: 200px;
	height: 48px;
	color: #ffff;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	font-weight: bold;
	margin: 10px 0;
`;
