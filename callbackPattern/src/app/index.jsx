import React 	    from 'react';
import { render } from 'react-dom';

import Form     from './componentes/Form/index.jsx';


class App extends React.Component
{
  constructor(props)
  {
  	super(props);
  } 

  render()
  {
    return (<div>
                <Form/>
            </div>);
  }
}

render(<App/>,document.getElementById('app'));