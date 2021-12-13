import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../icons/logo'
import { light } from '../../theme'
import { Button } from '../../components'


const HeaderStyled = styled.div`
display : flex;
flex-direction: row;
justify-content: space-around;
background-color: ${light.backgroundWhite};
padding: 15px 0px 15px 0px;
`


function Header(props: any): JSX.Element {

	const { setNewProjet } = props

	const newProjetHandler = () => {
		setNewProjet(true)
	}

	const myProjetHandler = () => {
		setNewProjet(false)
	}



	return (
		<HeaderStyled>
			<div style={{ width: '15vw' }}>

				<Logo />
			</div>
			<Button action={newProjetHandler}>new projets</Button>
			<Button action={myProjetHandler}>My Projets</Button>
			<Button disabled={true}>Profil</Button>
		</HeaderStyled>
	)
}

export default Header
