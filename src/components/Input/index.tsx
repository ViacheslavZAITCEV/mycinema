import React, { useState } from 'react'
import styled from 'styled-components'
import { SpaceProps } from "styled-system";
import { light } from '../../theme'

// type InputProps 

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
			type='text'
			onChange={(e) => setInput(e.target.value)}
		/>
	)
}

export { Input }


