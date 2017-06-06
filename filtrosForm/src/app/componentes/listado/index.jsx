import React      from 'react';
import { render } from 'react-dom';

class Listado extends React.Component
{
	constructor(props)
	{
		super(props);
/*
		//Lista de precios.
		this.precios     = [100,10,2000,300,400,50,60,800,126,3000,150,789,900,2000,4000,10000,20000,300,15,6,2,135];
		
		//Lista de precios filtrados.
		let filterPrices = this.precios.filter((price)=>{
			return ((price>=this.props.precios.min)&&(this.props.precios.max<=price));
		});

		//Estado con la lista de precios.
		this.state = {prices:filterPrices};

		console.log(1);
		*/
		this.state = {min:this.props.precios.min};
	}

	componentWillReceiveProps(nextProps)
	{
		console.log(nextProps);
		this.setState({ min: nextProps.min });  
 	}

	render()
	{
		console.log(this.state.min, 'new data');

        return (<div>
        			AAA {this.state.min}
        		</div>
        );
	}
}

export default Listado;