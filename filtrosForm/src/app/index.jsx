import React from 'react';
import { render } from 'react-dom';
import Filtros    from './componentes/filtros/index.jsx';
import Listado    from './componentes/listado/index.jsx';

class App extends React.Component{
	constructor()
	{
		super();
		this.extractPrices    = this.extractPrices.bind(this);
		this.sendPricesChilds = this.sendPricesChilds.bind(this);
		this.getListado  	  = this.getListado.bind(this);		
		this.state     		  = {valores:{min:0,max:20000}};
		this.filtros   		  = {min:0,max:0};
		this.lista 			  = null;
	}

	extractPrices(minVal,maxVal)
	{
		this.filtros.min = minVal;
		this.filtros.max = maxVal;
		this.setState({valores:{min:minVal,max:maxVal}});
		this.sendPricesChilds();
	}

	sendPricesChilds()
	{
		if (this.lista!=null)
			this.lista.filtrarPrecios(this.filtros.min,this.filtros.max);		
	}

	getListado(elem)
	{
		if (elem!=null)
		{
			this.lista = elem;
			this.sendPricesChilds();		
		}
	}

	render()
	{
        return (
               <div>
               		<h3><u>Buscar precio:</u></h3>
               		<div>
               			<Filtros valores={this.extractPrices}></Filtros>
               			<Listado precios={this.getListado}></Listado>
               		</div>
                </div>
        );
	}
}

render(<App />,document.getElementById('app'));