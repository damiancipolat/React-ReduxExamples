import React 	    from 'react';
import { render } from 'react-dom';

class Tabla extends React.Component
{
  constructor(props)
  {
    super(props);
    
    //Envio a la funcion pasada por el parent para obtener una referncia mia.
    this.props.getRef(this);

    //Variables internas y estado.
    this.state       = {items:[]};

    //Bindeo metodos internos.
    this.updateItems = this.updateItems.bind(this);
    this.deleteItem  = this.deleteItem.bind(this);
    this.editItem    = this.editItem.bind(this);
  }

  //Funcion que es llamada desde el padre para actualizar la lista de datos.
  updateItems(val)
  {
    this.setState({items:val});
  }

  //Cuando borro un elemento de la tabla.
  deleteItem(i)
  {
    this.props.onDelAction(i);
  }

  //Cuando actualizo un elemento de la tabla.
  editItem(i)
  {
    this.props.onEditAction(i);
  }

  render()
  {
    let cols = this.props.cols.map((elem,i)=><td key={i}>{elem}</td>);

    return (<div className="bordeTable">
              <table>
                <thead>
                  <tr>
                    {cols}
                    <td colSpan="2">Acción</td>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.items.map((item,i)=>
                  {
                      let items = [];
                      let ii    = 0;

                      for (let prop in item)
                      {
                        ii++;
                        items.push(<td key={ii}><span>{item[prop]}</span></td>);
                      }

                      return <tr key={i}>
                                {items}
                                <td className="btnTd">
                                  <button onClick={()=>this.editItem(i)}>Editar</button>
                                </td>
                                <td className="btnTd">
                                  <button onClick={()=>this.deleteItem(i)}>Borrar</button>
                                </td>                                
                              </tr>;
                  })
                }                
                </tbody>
              </table>
            </div>);
  }  
}

export default Tabla;