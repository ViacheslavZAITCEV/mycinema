import React from 'react'
import styled from 'styled-components'
import { light } from '../../theme'


const FooterStyled = styled.div`
display: flex;
flex-direction : column;
justify-content: space-around;
padding-bottom: 0.5%;
`

const Text = styled.h4`
color: ${light.text};
font-style: italic;
`

const DivStyled = styled.div`
color: ${light.text};
font-style: italic;
display: flex;
justify-content: center;
`

const AStyled = styled.a`
color: ${light.primary};
text-decoration : none;
font-style: italic;
`

function Footer() {
	return (
		<FooterStyled>
			<DivStyled>

				<Text>
					site est réalisé pour <AStyled href='https://www.easy.movie/' >easy.movie</AStyled>
				</Text>
			</DivStyled>
			<DivStyled>
				Développement: &nbsp;
				<AStyled href='https://github.com/ViacheslavZAITCEV' >
					Viachesalv ZAITCEV
				</AStyled>
			</DivStyled>
		</FooterStyled>
	)
}

export default Footer
