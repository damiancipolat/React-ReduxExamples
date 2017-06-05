import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {name:'damian'};
	}
	render()
	{
        return (
               <div>
                    {this.state.name}
                </div>
        );
	}
}

render(<App />,document.getElementById('app'));