import React 	    from 'react';
import PropTypes  from 'prop-types';
import { render } from 'react-dom';

//Es un formulario el cual ejecuta un handle pasado por prop con el valor del texto cargado.
class Form extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state      = {nombre:''};
    this.addBtn     = this.addBtn.bind(this);
    this.changeText = this.changeText.bind(this);    
  }

  addBtn()
  {
    if (this.state.nombre!='')
    {
      this.props.onAdd(this.state.nombre);
      this.setState({nombre:''});
    }
    else
      alert('Debe escribir un nombre para poder agregarlo!');
  }

  changeText(e)
  {
    this.setState({nombre:e.target.value}); 
  }

  render()
  {
    return (<div>
              <div>
                ¿Cual es tú nombre?
              </div>
              <div>
                <input type="text" onChange={this.changeText} value={this.state.nombre}/>
              </div>
              <button onClick={this.addBtn}>Agregar&nbsp;&rarr;</button>
            </div>);
  }
}

//Implementa una lista de usuarios, la cual se renderiza en base a una prop datos, invoca una funcion callback por prop en el btn de borrar.
class Lista extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
   return (<div>
              <ul>
                {this.props.datos.map((elem,i)=>{
                    return <li key={i}>
                              {elem} - <a href="#" onClick={()=>this.props.onDel(i)}><b>Borrar</b></a>
                           </li>
                })}
              </ul>
            </div>);
  }
}


class App extends React.Component
{
  constructor(props)
  {
  	super(props);
    this.state    = {users:[]};
    this.agregar  = this.agregar.bind(this);
    this.remove   = this.remove.bind(this);
  }

  //Handle para manegar los agregados de elementos.
  agregar(nombre)
  {
    let newList = this.state.users;
    newList.push(nombre);
    this.setState({users:newList});
  }

  //Handle para manejar el borrado de usuarios.
  remove(ix)
  {
    let resu = this.state.users;
    resu.splice(ix,1);
    this.setState({users:resu});
  }

  render()
  {
    return (<div>
              <div>
                <Form onAdd={this.agregar} users={this.state}/>
                <br/>                              
                <span><u>Lista de usuarios:</u></span>
                <Lista datos={this.state.users} onDel={this.remove}/>
              </div>
            </div>
      );
  }
}

render(<App/>,document.getElementById('app'));