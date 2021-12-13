import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input } from '../../components'
import { light } from '../../theme'


const NewProjet = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
`

const H3Styled = styled.h3`
color: ${light.primary};
`

const FormStyled = styled.form`
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
				<Input input={description} setInput={setdescription} />
				<Button
					disabled={!nom && !description}
					action={() => console.log('télécharger le fichier video')}
				>
					Upload video
				</Button>
			</FormStyled>
		</NewProjet>
	)
}

export default CreateProjet
