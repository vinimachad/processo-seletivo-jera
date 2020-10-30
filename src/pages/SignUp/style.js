import styled from "styled-components";

import { ErrorMessage, Formik, Form, Field } from "formik";

export const Container = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		color: #0db551;
		font-family: "Roboto", sans-serif;
	}
	#form {
		width: 200px;
		height: fit-content;
		/* background: #f1f1f5; */
		display: flex;
		flex-direction: column;
		align-items: center;
		input {
			width: 100%;
			max-width: 100%;
			height: 48px;
			border: 0;
			margin: 10px 0;
			background: #f1f1f5;
			padding: 0 15px;
			border-radius: 4px;
		}
	}
	.link {
		font-size: 16px;
		text-decoration: none;
		color: #0db551;
		font-weight: bold;
	}
`;
