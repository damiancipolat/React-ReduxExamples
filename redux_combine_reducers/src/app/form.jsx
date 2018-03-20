import React       from 'react';
import ReactDOM    from 'react-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { state };
}

class Form extends React.Component{

  constructor(props){

    super(props);

    this.handleDial    = this.handleDial.bind(this);
    this.handleErase   = this.handleErase.bind(this);
    this.handleDel     = this.handleDel.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);

    //Bindeo al store la actualización automatica.
    setInterval(()=>this.updateDisplay(), 100);

  }

  handleDel(){
    this.props.dispatch({type:'DEL_NUMBER'});
  }

  handleErase(){
    this.props.dispatch({type:'ERASE_NUMBER'});
  }

  handleDial(number){    
    this.props.dispatch({type:'DIAL_NUMBER',value:number});
  }

  updateDisplay(){
    this.props.dispatch({type:'UPDATE_NUMBER',value:this.props.state.dialReducer.numbers});
  }

  getNumber(){
    return this.props.state.phoneReducer.display;
  }

  render(){

    return (<center>
              <h3>PHONE</h3>
              <div>
                <b>{this.getNumber()}</b>
              </div>
              <br/>
              <div>
                <div>
                  <input type="button" value="1" onClick={()=>this.handleDial('1')}/>&nbsp;&nbsp;
                  <input type="button" value="2" onClick={()=>this.handleDial('2')}/>&nbsp;&nbsp;
                  <input type="button" value="3" onClick={()=>this.handleDial('3')}/>&nbsp;&nbsp;
                </div><br/>
                <div>
                  <input type="button" value="4" onClick={()=>this.handleDial('4')}/>&nbsp;&nbsp;                
                  <input type="button" value="5" onClick={()=>this.handleDial('5')}/>&nbsp;&nbsp;
                  <input type="button" value="6" onClick={()=>this.handleDial('6')}/>&nbsp;&nbsp;
                </div><br/>
                <div>
                  <input type="button" value="7" onClick={()=>this.handleDial('7')}/>&nbsp;&nbsp;
                  <input type="button" value="8" onClick={()=>this.handleDial('8')}/>&nbsp;&nbsp;                
                  <input type="button" value="9" onClick={()=>this.handleDial('9')}/>&nbsp;&nbsp;
                </div><br/>
                <div>
                  <input type="button" value="0" onClick={()=>this.handleDial('0')}/>&nbsp;&nbsp;
                  <input type="button" value="#" onClick={()=>this.handleDial('#')}/>&nbsp;&nbsp;
                  <input type="button" value="*" onClick={()=>this.handleDial('*')}/>
                </div><br/>
                <div>
                  <input type="button" value="Erase" onClick={()=>this.handleErase()}/>&nbsp;&nbsp;
                  <input type="button" value="DEL" onClick={()=>this.handleDel()}/>
                </div>                
              </div>
            </center>);

  }

}

export default connect(mapStateToProps)(Form);