import React from 'react';
import { render } from 'react-dom';
import Buscador   from './componentes/Buscador/index.jsx';

class App extends React.Component{
	constructor(){
		super();
	}
	render()
	{
        return (
               <div>
               		<h3><u>Buscar País</u></h3>
               		<Buscador></Buscador>
                </div>
        );
	}
}

render(<App />,document.getElementById('app'));