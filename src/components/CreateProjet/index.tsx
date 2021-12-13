import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input, InputText } from '../../components'
import { light } from '../../theme'


const NewProjet = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const H3Styled = styled.h3`
color: ${light.primary};
`

const FormStyled = styled.form`
display: flex;
flex-direction: column;
min-width : 50%;
color: ${light.primary};
`

function CreateProjet() {

	const [nom, setnom] = useState('')
	const [description, setdescription] = useState('')

	return (
		<NewProjet>

			<H3Styled>
				Create your new projet
			</H3Styled>

			<FormStyled>
				<Input input={nom} setInput={setnom} />
				<InputText input={description} setInput={setdescription} />
				<Button
					disabled={nom === '' || description === ''}
					action={() => console.log('télécharger le fichier video')}
				>
					Upload video
				</Button>
			</FormStyled>
		</NewProjet>
	)
}

export default CreateProjet
