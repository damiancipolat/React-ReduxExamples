import React     from 'react';
import ReactDOM  from 'react-dom';

import List    from './list.jsx';
import Search  from './Search.jsx';

// Componente formulario.
const Form = ({value, clickSumar, clickRestar,find})=>{

  return (<div>            
            <b>Buscador</b><br/>
            <span>Escriba el nombre de la ciudad</span><br/><br/>
            <span>Resultados:{value.paisesList.length}</span><br/><br/>
            <Search onFind={find}/><br/>
            <List   list  ={value}/>
          </div>);

}

export default Form;