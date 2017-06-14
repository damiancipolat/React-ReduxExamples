import React 	    from 'react';
import PropTypes  from 'prop-types';
import { render } from 'react-dom';

class Activ extends React.Component
{
  constructor(props)
  {
      super(props);
  } 

  render()
  {
    let boton = null;

    //Según el estado pasado al componente 
    if (!this.props.menu)
      boton = <button onClick={()=>this.props.clickMenu()}>Mostrar Menu</button>;
    else
      boton = <button onClick={()=>this.props.clickMenu()}>Ocultar Menu</button>;

    return (<div>
              {boton}
            </div>);
  }
}

class Menu extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    //Según el estado muestro u oculto el menu.
    let cssClass = ((this.props.visible)?'ShowMenu':'HiddenMenu');
    
    return (
            <div className={cssClass}>
              <ul>
                  <li>Opcion 1</li>
                  <li>Opcion 2</li>
                  <li>Opcion 3</li>
                  <li>Opcion 4</li>
                  <li>Opcion 5</li>
                  <li>Opcion 6</li>
              </ul>
            </div>);
  }
}

class App extends React.Component
{
  constructor(props)
  {
  	super(props);
    this.state      = {menu:true};
    this.changeMenu = this.changeMenu.bind(this);
  }

  changeMenu()
  {
    this.setState({menu:!this.state.menu});
    console.log('Menu',this.state.menu);
  }

  render()
  {
    return (<div className="pepe">
                Ocultar /Mostrar Menu
                <Activ menu={this.state.menu} clickMenu={this.changeMenu}></Activ><br/>
                <Menu visible={this.state.menu}></Menu>
            </div>
      );
  }
}

render(<App/>,document.getElementById('app'));