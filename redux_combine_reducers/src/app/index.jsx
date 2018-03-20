import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import { createStore,combineReducers  } from 'redux';

import App           from './form.jsx';
import dialReducer   from './dialReducer.js';
import phoneReducer  from './phoneReducer.js';

// Inicializamos el store pasándole el reducer
const store = createStore(combineReducers({dialReducer,phoneReducer}));

//Renderizo
const render = () => {

  ReactDOM.render(<Provider store={store}>
                      <App/>
                  </Provider>,
                  document.getElementById('app'));

};

render();