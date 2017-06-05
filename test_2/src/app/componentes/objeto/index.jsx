import React from 'react';
import { render } from 'react-dom';

class Objeto extends React.Component
{
	constructor()
	{
		super();

		//Fijo un array para probar el for.
		this.state={lista:['red','green','blue','cyan','magenta']};
	}

	render()
	{
		//Recordar agregar al elemento que se repite un atrib key.
		let colores = this.state.lista.map((color,index)=><div key={index}>{color}</div>);

        return (
               <div>
               		Hola {this.props.nombre}
               		<hr/>
               		{colores}
               </div>
        );
	}
}

export default Objeto;