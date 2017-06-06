import React      from 'react';
import { render } from 'react-dom';

class Filtros extends React.Component
{
	constructor(props)
	{
		super(props);
		
		this.state = {precioMin:0,precioMax:1000};

		this.updateMinPrices = this.updateMinPrices.bind(this);
		this.updateMaxPrices = this.updateMaxPrices.bind(this);
		this.updatePrices 	 = this.updatePrices.bind(this);		
	}

	updatePrices(e)
	{
		this.props.valores(this.state.precioMin,this.state.precioMax);
	}

	updateMinPrices(e)
	{
		this.setState({precioMin:e.target.value});
		this.updatePrices();
	}

	updateMaxPrices(e)
	{
		this.setState({precioMax:e.target.value});
		this.updatePrices();
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
	               		<button className="btnCtrl">
	               			Buscar
	               		</button>
	               </div>
        );
	}
}

export default Filtros;