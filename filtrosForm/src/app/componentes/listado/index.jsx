import React      from 'react';
import { render } from 'react-dom';

class Listado extends React.Component
{
	constructor(props)
	{
		super(props);

		//Lista de precios.
		this.precios     = [100,10,2000,300,400,50,60,800,126,3000,150,789,900,2000,4000,10000,20000,300,15,6,2,135];

		//Estado con la lista de precios.
		this.state = {prices:[]};

		//Envio el contenido del hijo al padre.
		this.props.precios(this);
	}

	filtrarPrecios(min,max)
	{
		min = parseInt(min);
		max = parseInt(max);

		//Lista de precios filtrados.
		let filterPrices = this.precios.filter((price)=>{
			return ((price>=min)&&(max<=price));
		});

		//Seteo el estado con los nuevos precios.
		this.setState({prices:filterPrices});
 	}

	render()
	{
		if (this.state.prices.length>0)
			return (<div className="listaPrecios">
						<ul>
						{
							this.state.prices.map((price,i)=>
							{
								return <li key={i} className="itemPrecios">El elemento cuesta - <b>$ {price}</b></li>;
							})
						}
						</ul>
			      	</div>);
		else
			return (<div><b>No se encontraron precios.</b></div>);
	}
}

export default Listado;