import React from 'react';

import './Navigation.styles.scss';

import ButtonIcon from '../../../components/Buttons/ButtonIcon/ButtonIcon';
import ButtonMenu from '../../../components/Buttons/ButtonMenu/ButtonMenu';

import {ReactComponent as Basket} from './img/basket.svg';


const Navigation = () =>{
	return <nav className="navigation">
		<ButtonIcon>  <Basket/>   </ButtonIcon>
		<ButtonMenu>    </ButtonMenu>
	</nav>;
};


export default Navigation;
