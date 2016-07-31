import React from 'react';

export default class InputContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '' 
    };
  }

  onTextChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  onEnter(event) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

  onSubmit() {
    this.setState({
      message: '' 
    });
  }

  render() {
    return (
      <div class="input-container">
         <input type="text" 
          class="message-input" 
          placeholder="Сообщение..." 
          value={this.state.message}
          onKeyDown={this.onEnter.bind(this)}
          onChange={this.onTextChange.bind(this)}/>
         <a href="#" 
          class="send-button"
          onClick={this.onSubmit.bind(this)}>Send</a>
      </div>
    );
  }
}
