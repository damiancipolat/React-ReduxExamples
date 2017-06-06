import React from 'react';
import { render } from 'react-dom';
import Filtros    from './componentes/filtros/index.jsx';
import Listado    from './componentes/listado/index.jsx';

class App extends React.Component{
	constructor()
	{
		super();
		this.extractPrices  = this.extractPrices.bind(this);
		this.state     		= {valores:{min:0,max:10}};
		this.filtros   		= {min:0,max:10};
	}

	extractPrices(minVal,maxVal)
	{
		this.filtros.min = minVal;
		this.filtros.max = maxVal;
		this.setState({valores:{min:minVal,max:maxVal}});
	}

	render()
	{
        return (
               <div>
               		<h3><u>Buscar precio:</u></h3>
               		<div>
               			<Filtros valores={this.extractPrices}></Filtros>
               			<Listado precios={this.state.valores}></Listado>
               			{this.state.valores.min} - {this.state.valores.max}
               		</div>
                </div>
        );
	}
}

render(<App />,document.getElementById('app'));