import React from "react";

import { Container } from "./styles";

const Button = ({ content, click, color }) => {
	return (
		<Container color={color} type="submit" onClick={click}>
			{content}
		</Container>
	);
};

export default Button;
