import React, { PropTypes } from 'react';
import { Provider }         from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

let store = createStore(todoApp);

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'SHOW_ALL' ? '/' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}>
    {children}
  </Link>
);

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);

const App = ({ params }) => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList
        filter={params.filter || 'SHOW_ALL'}
      />
      <Footer />
    </div>
  );
};

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App} />
    </Router>
  </Provider>
);

render(
  <Root store={store} />,
  document.getElementById('root')
);

/*
import React           from 'react';
import ReactDOM        from 'react-dom';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import Form        from './form.jsx';
import findReducer from './reducer.js';
*/

/*
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

const Root = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>  
);

//Renderizo
const render = () => {

  ReactDOM.render(<Form value = {store.getState()} 
                        find  = {(val)=> store.dispatch({type: 'find',payload:{text:val}})}/>,
                  document.getElementById('app'));

};

store.subscribe(render);
render();
*/