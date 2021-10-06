// /* eslint-disable react/prop-types */
// import React from 'react';
// import {connect} from 'react-redux';
// import {removeItem, addItem} from './items/shopList.actions';
// import { basketSellectedItems } from './items/shopList.selector';
// import Item from './shopList/item';

// const Basket = ({models, add, remove, match}) => {
// 	return <ul>
// 		{models.map((model) =>
// 			<Item key={model.id}
// 				id = {model.id}
// 				characteristics =
// 					{model.characteristics}></Item>)}
// 	</ul>;
// };


// const mapState = (state) =>{
  
// 	return {models: basketSellectedItems(state)};
// };

// const mapDispatch = {
// 	remove: removeItem,
// 	add: addItem,
// };

// export default connect(mapState, mapDispatch)(Basket);
