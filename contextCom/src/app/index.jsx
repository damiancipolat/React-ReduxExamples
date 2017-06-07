import React 	  from 'react';
import PropTypes  from 'prop-types';
import { render } from 'react-dom';


class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

//Cada vez que usamos el contexto debemos definir que tipo de campos se van a usar.
Button.contextTypes = {
  color: PropTypes.string
};

class Message extends React.Component {
  render() {
    return (
      <div>
      	USER: <b>{this.context.user}</b>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

//Cada vez que usamos el contexto debemos definir que tipo de campos se van a usar.
Message.contextTypes = {
  user: PropTypes.string
};

class MessageList extends React.Component
{
  constructor(props)
  {
  	super(props);
  	this.messages = ['1111','2222','3333'];
  }

  getChildContext()
  {
    return {color: "red",user:"dcipolat"};
  }

  render()
  {
    const children = this.messages.map((message,i) =>
      <Message text={message.text} key={i}/>
    );
    return <div>{children}</div>;
  }
}

//Cada vez que usamos el contexto debemos definir que tipo de campos se van a usar.
MessageList.childContextTypes = {
  color: PropTypes.string,
  user: PropTypes.string
};

render(<MessageList/>,document.getElementById('app'));