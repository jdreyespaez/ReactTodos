var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function() {
    return <div className="input-group">
      <input type="text" className="form-control" />
      <span className="input-group-btn">
        <button className="btn btn-default" type="button">
          Agregar
        </button>
      </span>
    </div>
  }
});