import React from 'react';
import { render } from 'react-dom';
import Objeto  from './componentes/objeto/index.jsx';

class App extends React.Component{
	constructor(){
		super();
		this.state = {name:'Nombres'};
	}
	render()
	{
        return (
               <div>
                    {this.state.name}
                    <Objeto nombre="damian">1</Objeto>
                    <Objeto nombre="sebastian">1</Objeto>                    
                </div>
        );
	}
}

render(<App />,document.getElementById('app'));