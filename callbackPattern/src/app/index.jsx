import React 	    from 'react';
import { render } from 'react-dom';

class Lista extends React.Component
{
  constructor(props)
  {
    super(props);
    
    //Envio a la funcion pasada por el parent para obtener una referncia mia.
    this.props.getRef(this);
    this.state    = {items:[]};
    this.users    = [];

    this.addItems = this.addItems.bind(this);
  }

  addItems(vals)
  {
    this.users.push(vals);
    this.setState({items:this.users});
  }

  render()
  {
    return (<div className="bordeForm">
              <ul>
              {
                this.state.items.map((item,i)=>
                {
                  return <li key={i}>{item.nombre} - {item.apellido}</li>;
                })
              }
              </ul>
            </div>);
  }  
}

class Filtros extends React.Component
{
  constructor(props)
  {
    super(props);

    //Envio a la funcion pasada por el parent para obtener una referncia mia.
    this.props.getRef(this);  

    this.datos       = {nombre:null,apellido:null};
    this.sendValores = this.sendValores.bind(this);
  }

  sendValores()
  {
    console.log('Envio valores al padre.');    
    this.props.callBack(this.datos);
  }

  render()
  {
    return (<div className="bordeForm">
                <div className="bloqCampos label">
                  Carga de usuarios
                </div>
                <div className="bloqCampos">
                  <span>
                    <b>Nombre:</b>
                  </span>
                  <input type="text" placeholder="Escriba el nombre"    onChange={(e)=>{this.datos.nombre   = e.target.value}}/>
                </div>
                <div className="bloqCampos">
                  <span>
                    <b>Apellido:</b>
                    </span>
                  <input type="text" placeholder="Escriba el apellido"  onChange={(e)=>{this.datos.apellido = e.target.value}}/>
                </div>
                <div className="bloqCampos">
                  <button onClick={this.sendValores}>
                    Agregar&rarr;
                  </button>
                </div>
            </div>);
  }
}

class Form extends React.Component
{
  constructor(props)
  {
    super(props);
    this.receiveFilterData = this.receiveFilterData.bind(this);

    //Ref. a filtros.    
    this.filtros     = null;

    //Ref. a la lista.
    this.lista       = null;
  }

  //Funcion del padre que se ejecuta cuando el se hace click en filtrar.
  receiveFilterData(val)
  {
    if (val!=null)
    {
      //Hago esto para clonar el objeto, debido a que si no se hace se trabajan con referencias.
      let tmp = JSON.parse(JSON.stringify(val));

      //Actualizo el componente lista.
      this.lista.addItems(tmp);
    }
  }

  render()
  {
    return (<div>
              <Filtros getRef={(ref)=>{this.filtros=ref}} callBack={this.receiveFilterData}/>
              <Lista   getRef={(ref)=>{this.lista  =ref}}/>
            </div>);
  }
}

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