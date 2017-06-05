import React      from 'react';
import { render } from 'react-dom';
//import styles     from './style.css';

class Listado extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {precios:props.priceArray};
		//this.state={precioMin:0,precioMax:1000};

		//this.updateMinPrices = this.updateMinPrices.bind(this);
	}

	render()
	{
        return (<div>
        			<ul>
	               this.state.precios.map((num)=>{
	               		<li>{num}</li>
	               });
	               </ul>
               </div>               
        );
	}
}

export default Filtros;