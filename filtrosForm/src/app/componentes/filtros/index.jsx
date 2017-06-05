import React      from 'react';
import { render } from 'react-dom';
//import styles     from './style.css';

class Filtros extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={precioMin:0,precioMax:1000};

		this.updateMinPrices = this.updateMinPrices.bind(this);
		this.updateMaxPrices = this.updateMaxPrices.bind(this);
	}

	updateMinPrices(e)
	{
		this.setState({precioMin:e.target.value});
	}

	updateMaxPrices(e)
	{
		this.setState({precioMax:e.target.value});
	}

	render()
	{
        return (<div>
	               <div>
	               		<span>Precio Minimo:&nbsp;</span>
	               		<input type="number" onChange={this.updateMinPrices} value={this.state.precioMin}/>
	               		<br/><br/>
	               		<span>Precio Maximo:&nbsp;</span>
	               		<input type="number" onChange={this.updateMaxPrices}  value={this.state.precioMax}/>
	               		<br/><br/>
	               		<button>Buscar</button>
	               		{this.state.precioMin}-{this.state.precioMax}
	               </div>
               </div>               
        );
	}
}

export default Filtros;