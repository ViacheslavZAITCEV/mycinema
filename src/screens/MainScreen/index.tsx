import React from 'react';

import styled from 'styled-components';
import { ListProjet } from '../../components';
import CreateProjet from '../../components/CreateProjet';
import { light } from '../../theme';

const MainScreenStyled = styled.div`
background-color : ${light.background};
height: 100vh;
`


function MainScreen(props: any) {

	const { newProjet } = props

	return (

		<MainScreenStyled >
			{newProjet && <CreateProjet />}
			{!newProjet && <ListProjet />}
		</MainScreenStyled>

	);
}

export default MainScreen;
