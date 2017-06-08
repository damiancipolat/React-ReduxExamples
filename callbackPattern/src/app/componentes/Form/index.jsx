import React 	    from 'react';
import { render } from 'react-dom';
import Filtros    from '../../componentes/Filtros/index.jsx';
import Tabla      from '../../componentes/Tabla/index.jsx';

class Form extends React.Component
{
  constructor(props)
  {
    super(props);

    //Bindeo funciones internas.
    this.receiveFilterData = this.receiveFilterData.bind(this);
    this.removeUser        = this.removeUser.bind(this);    
    this.editUser          = this.editUser.bind(this);
    this.editBtn           = this.editBtn.bind(this);

    this.editIx  = null;

    //Ref. a filtros.    
    this.filtros = null;

    //Ref. a la lista.
    this.tabla   = null;

    //Listado de usuarios.
    this.users   = [];
  }

  //Funcion del padre que se ejecuta cuando el se hace click en filtrar.
  receiveFilterData(val)
  {
    if (val!=null)
    {
      //Hago esto para clonar el objeto, debido a que si no se hace se trabajan con referencias.
      let tmp = JSON.parse(JSON.stringify(val));

      //Agrego un usuario.
      this.users.push(tmp);

      //Actualizo la lista de usuarios.
      this.tabla.updateItems(this.users);
    }
  }

  //Cuando remuevo un usuario.
  removeUser(i)
  {
    if (window.confirm("Desea borrar este item?"))
    { 
       //Quito un elemento del array.
      this.users.splice(i,1);

      //Actualizo la lista de usuarios.
      this.tabla.updateItems(this.users);
    }
  }

  //Cuando de la tabla se ejecuta la accion editar.
  editUser(i)
  {
    let user    = this.users[i];
    this.editIx = i;
    this.filtros.updateText(user.nombre,user.apellido);
    this.filtros.setMode('edit');
  }

  //Cuando desde el formulario hacen click al btn de editar.
  editBtn(val)
  {
    //Vuelvo a modo editar.
    this.filtros.setMode('add');

    //Actualizo el array con la edicion nueva.
    this.users[this.editIx] = val;    

    //Actualizo la lista de usuarios.
    this.tabla.updateItems(this.users);

    alert('Usuario editado con exito!');
  }

  render()
  {
    return (<div>
              <Filtros getRef={(ref)=>{this.filtros=ref}} callbackAction={this.receiveFilterData} onEditAction={this.editBtn}/>
              <Tabla   getRef={(ref)=>{this.tabla  =ref}} cols={['Nombre','Apellido']} onEditAction={this.editUser} onDelAction={this.removeUser}/>
            </div>);
  }
}


export default Form;