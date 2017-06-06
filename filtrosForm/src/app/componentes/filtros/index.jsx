import React      from 'react';
import { render } from 'react-dom';

class Filtros extends React.Component
{
	constructor(props)
	{
		super(props);
		
		this.state   = {precioMin:0,precioMax:20000};
		this.filtros = {min:0,max:20000};

		this.updateMinPrices = this.updateMinPrices.bind(this);
		this.updateMaxPrices = this.updateMaxPrices.bind(this);
		this.sendPrices 	 = this.sendPrices.bind(this);
	}
	
	componentDidMount()
	{
		this.sendPrices();
	}

	updateMinPrices(e)
	{
		this.setState({precioMin:e.target.value});
		this.filtros.min = e.target.value;
	}

	updateMaxPrices(e)
	{
		this.setState({precioMax:e.target.value});
		this.filtros.max = e.target.value;		
	}

	sendPrices()
	{
		this.props.valores(this.filtros.min,this.filtros.max);		
	}

	render()
	{
        return (		
	               <div className="filtroBorde">
	               		<div className="cuadroCtrl">
	               			<div className="txtTitle">
	               				Precio Minimo:&nbsp;
	               			</div>
	               			<div className="txtInput">
	               				<input type="number" onChange={this.updateMinPrices} value={this.state.precioMin}/>
	               			</div>
	               		</div>
	               		<div className="cuadroCtrl">
	               			<div className="txtTitle">
	               				Precio Maximo:&nbsp;
	               			</div>
	               			<div className="txtInput">
	               				<input type="number" onChange={this.updateMaxPrices} value={this.state.precioMax}/>
	               			</div>
	               		</div>
	               		<button className="btnCtrl" onClick={this.sendPrices}>
	               			Buscar
	               		</button>
	               </div>
        );
	}
}

export default Filtros;