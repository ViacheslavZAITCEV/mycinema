import React from 'react'
import styled from 'styled-components'
import { light } from '../../theme'



function Button(props: any) {

	const { action, primary, disabled, children } = props

	const ButtonStyled = styled.button`
justify-content : center;
color: ${primary ? light.primary : light.disabled};
background-color : ${light.background};
border: solid;
border-width: 2px;
border-color: ${light.primary};
border-radius: 15px;
:hover {
	border-color: ${!disabled ? light.active : light.disabled};
	color: ${!disabled ? light.primary : light.disabled};
}
`

	return (
		<ButtonStyled
			onClick={() => action()}
		>
			{children}
		</ButtonStyled>
	)
}

export { Button }
