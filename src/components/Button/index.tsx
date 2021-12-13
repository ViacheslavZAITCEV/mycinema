import React from 'react'
import styled from 'styled-components'
import { light } from '../../theme'



function Button(props: any) {

	const { action, primary, disabled, children } = props

	const ButtonStyled = styled.button`
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
			onClick={
				action ? () => action() : () => console.log('button is disabled')
			}
		>
			{children}
		</ButtonStyled>
	)
}

export { Button }
