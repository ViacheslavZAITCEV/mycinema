import React, { useState } from 'react'
import styled from 'styled-components'
import { light } from '../../theme'

function Input(props: any) {

	const { input, setInput } = props

	const InputStyled = styled.input`
		color: ${light.text};
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

export { Input }


