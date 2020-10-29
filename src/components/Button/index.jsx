import React from "react";

import { Container } from "./styles";

const Button = ({ content, click }) => {
	return (
		<Container type="submit" onClick={click}>
			{content}
		</Container>
	);
};

export default Button;
