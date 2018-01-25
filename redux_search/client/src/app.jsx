import React           from 'react';
import ReactDOM        from 'react-dom';
import { createStore } from 'redux';

import Form        from './form.jsx';
import findReducer from './reducer.js';

//Agrego la funcion like para emular sql.
String.prototype.like = function(search)
{
    if (typeof search !== 'string' || this === null) {return false; }

    // Remove special chars
    search = search.replace(new RegExp("([\\.\\\\\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:\\-])", "g"), "\\$1");

    // Replace % and _ with equivalent regex
    search = search.replace(/%/g, '.*').replace(/_/g, '.');

    // Check matches
    return RegExp('^' + search + '$', 'gi').test(this);
}

// Inicializamos el store pasándole el reducer
const store = createStore(findReducer);

//Renderizo
const render = () => {

  ReactDOM.render(<Form value = {store.getState()} 
                        find  = {(val)=> store.dispatch({type: 'find',payload:{text:val}})}/>,
                  document.getElementById('app'));

};

store.subscribe(render);
render();
