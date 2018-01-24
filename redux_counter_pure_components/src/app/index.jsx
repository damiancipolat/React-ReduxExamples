import React           from 'react';
import ReactDOM        from 'react-dom';
import { createStore } from 'redux';

// Preparamos nuestra funcion reducer
const calcReducer = (state = 0, action) => {

  switch(action.type) {
    case 'sumar':
      return state + 1;
    case 'restar':
      return state - 1;
    default:
      return state;
  }

}

// Inicializamos el store pasándole el reducer
const store = createStore(calcReducer);

// Componente contador.
const Counter = ({value, clickSumar, clickRestar})=>{

  return (<div>
            <h1>{value}</h1>
            <button onClick={clickSumar}>Sumar</button>
            <button onClick={clickRestar}>Restar</button>
          </div>);

}

// Renderizamos el componente.
// Cada vez que el stado cambie, el componente
// se volverá a renderizar.
const render = () => {

  ReactDOM.render(
    <Counter  value={store.getState()} 
          clickSumar={ ()=> store.dispatch({type: 'sumar'}) } 
          clickRestar={ ()=> store.dispatch({type: 'restar'}) }/>
    ,
    document.getElementById('app')
  );

};

store.subscribe(render);
render();
