import React 	    from 'react';
import PropTypes  from 'prop-types';
import { render } from 'react-dom';

import Time  from './time.jsx';


class App extends React.Component
{
  constructor(props)
  {
  	super(props);
  }

  render()
  {
    return (<div>
              <div>
                <b>Escriba la hora en formato: HH:MM</b><br/><br/>
                <Time/>
              </div>
            </div>
      );
  }
}

render(<App/>,document.getElementById('app'));