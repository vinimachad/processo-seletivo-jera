import React from "react";

import { Container } from "./styles";
import previewImage from "../../assets/icon.png";
import Button from "../Button";
const Modal = ({ nameRef, seleRef, click }) => {
	return (
		<Container>
			<img src={previewImage} alt="" />
			<input ref={nameRef} type="text" placeholder="Digite o nome do perfil" />
			<select ref={seleRef} name="" id="">
				<option value="">Selecione o tipo do perfil</option>
				<option value="kid">Perfil para criança</option>
				<option value="adult">Perfil para adulto</option>
			</select>
			<Button click={click} content="Criar" />
		</Container>
	);
};

export default Modal;
