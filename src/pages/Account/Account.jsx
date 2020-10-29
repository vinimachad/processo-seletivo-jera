import React from "react";

import { Container } from "./styles";
import Button from "../../components/Button";

import { useUserData } from "../../Context/dataContext";

export default function Users() {
	const { dataUser } = useUserData();
	console.log(dataUser);
	return (
		<Container>
			<div className="choose-accounts">
				<ul>
					<button className="card-account">
						<img className="image-face" src={dataUser.photoURL} alt="" />
						<strong className="name">{dataUser.displayName}</strong>
					</button>
					<button className="card-account">
						<img
							className="image-face"
							src="http://dreamkids.com.br/wp-content/uploads/2019/06/crian%C3%A7as-brincando2-1024x726.png"
							alt=""
						/>
						<strong className="name">Jera Kids</strong>
					</button>
				</ul>
			</div>
			<Button content="Sair" type="button" click={() => {}} />
		</Container>
	);
}
