import React, { useState } from 'react'
import styled from 'styled-components'
import { light } from '../../theme'

function InputText(props: any) {

	const { input, setInput, width, height } = props

	const InputStyled = styled.textarea`
	color: ${light.text};
	width : ${width};
	height : ${height};
	background-color: ${light.background};
	border : solid;
	border-width: 2px;
	border-radius: 12px;
	border-color: ${light.primary};
	:hover{
		border-color: ${light.active};
	}
	`


	return (
		<InputStyled
			value={input}
			onChange={(e) => setInput(e.target.value)}
		/>
	)
}

export { InputText }


