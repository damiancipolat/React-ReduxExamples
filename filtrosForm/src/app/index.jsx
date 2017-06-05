import React from 'react';
import { render } from 'react-dom';
import Filtros   from './componentes/filtros/index.jsx';
//import Listado   from './componentes/listado/index.jsx';

class Test extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state  = {valor:props.valor};
		this.accion = this.accion.bind(this);

	}

	//Muestro un alert que se provoca cuando se hace click en el boton, pero ejecuta un metodo de un componente padre.
	accion()
	{
		this.props.method();
	}

	render()
	{
        return (<div>
	               NUEVO VALOR: {this.state.valor}
	               <button onClick={this.accion}>Clickear</button>
               </div>               
        );
	}
}

class App extends React.Component{
	constructor()
	{
		super();
		this.onAlert = this.onAlert.bind(this);		
	}

	onAlert()
	{
		alert("te estoy saludando");
	}

	render()
	{
        return (
               <div>
               		<h3><u>Buscar precio:</u></h3>
               		<Filtros></Filtros>
               		<Test method={this.onAlert} valor="777"></Test>
                </div>
        );
	}
}

render(<App />,document.getElementById('app'));