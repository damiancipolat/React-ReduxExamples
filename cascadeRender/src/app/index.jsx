import React 	  from 'react';
import PropTypes  from 'prop-types';
import { render } from 'react-dom';

class Bloque extends React.Component
{
  constructor(props)
  {
    super(props);

    //Pongo el timestamp, para saber si el constructor vuelve a ejecutarse.
    let tmp = 'TEST - '+Math.floor(Date.now());
    this.valor = <b>{tmp}</b>;
  }

  render()
  {
    //Traigo el timestamp para ver si cambia el render de elementos hijos cuando cambia el elemento padre.
    let tmp = Math.floor(Date.now());
    return (<div>
              <span>RENDER {tmp} - CONSTRUCTOR {this.valor}</span>              
            </div>);
  }
}

class App extends React.Component
{
  constructor(props)
  {
  	super(props);
    this.state    = {nombre:'Sin nombre'};
    this.escribir = this.escribir.bind(this);
  }

  escribir(e)
  {
    this.setState({nombre:e.target.value});
  }

  render()
  {
    return (<div>
              <div>¿Cual es tu nombre?</div>
              <div>
                <span>{this.state.nombre}</span><br/>
                <input type="text" onChange={this.escribir}/>
                <hr/>
                <h3>Prueba Render</h3>                
                <Bloque/>
                <Bloque/>
                <Bloque/>
                <Bloque/>
              </div>
            </div>
      );
  }
}

render(<App/>,document.getElementById('app'));