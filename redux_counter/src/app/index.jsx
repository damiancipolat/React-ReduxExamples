import React           from 'react';
import { render } from 'react-dom';
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
class Counter extends React.Component
{

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.props.clickSumar}>Sumar</button>
        <button onClick={this.props.clickRestar}>Restar</button>
      </div>);

  }

}

class App extends React.Component{

  constructor(){
    super();
  }

  render(){
    return (<div>
            <Counter  value       = {store.getState()} 
                      clickSumar  = { ()=> store.dispatch({type: 'sumar'}) } 
                      clickRestar = { ()=> store.dispatch({type: 'restar'}) }/>
            </div>);
  }

}


const renderizar = ()=>{
  
  render(<App />,document.getElementById('app'));

}

store.subscribe(renderizar);
renderizar();
