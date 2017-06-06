import React 	  from 'react';
import { render } from 'react-dom';

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

export default Test;