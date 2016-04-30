var React = require('react');
var ReactDOM = require('react-dom');
var Firebase = require('firebase');
var rootUrl = 'https://scorching-inferno-6761.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
  },
  render: function() {
    return <div className="input-group">
      <span className="input-group-addon">
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.handleDoneChange}
          />
      </span>
      <input type="text"
        className="form-control"
        value={this.state.text}
        />
      <span className="input-group-btn">
        <button className="btn btn-default">
          Eliminar
        </button>
      </span>
    </div>
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked};
    this.setState(update);
    this.fb.update(update);
  }
});
