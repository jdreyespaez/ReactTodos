var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  render: function() {
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handleInputChange}
        type="text"
        className="form-control" />
      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-default"
          type="button">
          Agregar
        </button>
      </span>
    </div>
  },
  handleClick: function() {
    // Send value of text input to Firebase
    console.log(this.state.text);
  },
  handleInputChange: function(event) {
    this.setState({text: event.target.value});
  }
});
