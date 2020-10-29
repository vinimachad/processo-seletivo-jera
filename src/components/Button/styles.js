import styled from "styled-components";

export const Container = styled.button`
	width: 230px;
	height: 48px;
	background: ${(props) => (props.color ? props.color : "#0db551")};
	border: 0;
	border-radius: 4px;
	color: white;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	margin: 5px 0;
`;
