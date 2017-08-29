import React 	    from 'react';
import PropTypes  from 'prop-types';
import { render } from 'react-dom';

class Time extends React.Component{

  constructor(props){

    super(props);
    this.state    = {value:''};
    this.onChange = this.onChange.bind(this);

  }

  // Dice si el string numericamente cumple para ser tiempo
  timeType(str){

    let hs  = parseInt(str.substr(0,2));
    let min = parseInt(str.substr(2,2));
    
    //Si tiene 4 caracteres.
    if (str.length==4)
      return ((hs<=23)&&(min<=59));
    
    //Si tiene 3 caracteres.
    if (str.length==3)
      return ((hs<=23)&&(min<=5));

    //Si tiene 2 caracteres.
    if (str.length==2)
      return (hs<=23);

    //Si tiene 1 caracter.
    if (str.length==1)
      return (hs<=9);

    return false;

  }

  // Valida si el string tiene formato de hora y minutos.
  isTimeFormat(str){
    return ((str.length==4)&&(!isNaN(str))&&(this.timeType(str)))
  }

  // Transformo el string a la mascara de tiempo.
  maskTime(time){
    return time[0]+time[1]+':'+time[2]+time[3];
  }

  // Cada vez que se escribe.
  onChange(e){

    // Traigo el texto del campo.
    let valor = e.target.value.replace(':','');

    // Si cumple el formato.
    if ((this.isTimeFormat(valor))&&((valor.length==4)||(valor.length==3))){

      // Actualizo el estado y aplico la mascara.
      valor = this.maskTime(valor);
      this.setState({value:valor});

    }

    e.target.value = valor;

  }

  render(){    
    return (<input type="text" onChange={this.onChange} placeholder="HH:MM" />);
  }

}

module.exports = Time;