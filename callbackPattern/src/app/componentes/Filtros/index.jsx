import React 	    from 'react';
import { render } from 'react-dom';

class Filtros extends React.Component
{
  constructor(props)
  {
    super(props);

    //Envio a la funcion pasada por el parent para obtener una referncia mia.
    this.props.getRef(this);  

    //Datos internos y estado.
    this.mode        = 'add'
    this.datos       = {nombre:'',apellido:''};
    this.state       = {nombre:this.datos.nombre,apellido:this.datos.apellido,mode:this.mode};

    this.sendValores = this.sendValores.bind(this);
    this.updateText  = this.updateText.bind(this);
    this.editValores = this.editValores.bind(this);    
  }

  //Envio al callback el valor del componente.
  sendValores()
  {
    this.props.callbackAction(this.datos);
  }

  //Actualizo valores del control.
  updateText(name,surname)
  {
    this.setState({nombre:name,apellido:surname,mode:this.mode});
    this.datos.nombre   = name;
    this.datos.apellido = surname;
  }

  //Callback para enviar al padre que hacer cuando se hace click en el btn editar.
  editValores()
  {
    this.props.onEditAction(this.datos);
  }

  //Cambio el modo de trabajo desde el padre.
  setMode(mode,ix)
  {
    this.mode   = mode;
    this.setState({nombre:this.datos.nombre,apellido:this.datos.apellido,mode:this.mode});
  }

  render()
  {
    let action = null;

    if (this.state.mode=='add')
      action = <button onClick={this.sendValores}>Agregar&rarr;</button>;

    if (this.state.mode=='edit')
      action = <button onClick={this.editValores}>Editar&rarr;</button>;    

    return (<div className="bordeForm">
                <div className="bloqCampos label">
                  Carga de usuarios
                </div>
                <div className="bloqCampos">
                  <span>
                    <b>Nombre:</b>
                  </span>
                  <input type="text" placeholder="Escriba el nombre"    onChange={(e)=>{this.updateText(e.target.value,this.datos.apellido)}} value={this.state.nombre}/>
                </div>
                <div className="bloqCampos">
                  <span>
                    <b>Apellido:</b>
                    </span>
                  <input type="text" placeholder="Escriba el apellido"  onChange={(e)=>{this.updateText(this.datos.nombre,e.target.value)}}  value={this.state.apellido}/>
                </div>
                <div className="bloqCampos">
                  {action}
                </div>
            </div>);
  }
}

export default Filtros;