var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function() {
    return <ul>
      {this.renderList()}
    </ul>
  },
  renderList: function() {
    // The first condition is to check if the array is empty
    if(this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>
        Agrega una tarea.
      </h4>
    // IOC make a loop of the items and return the array children
    } else {
      var children = [];

      for(var key in this.props.items) {
        children.push(
          <li>
            {this.props.items[key].text}
          </li>
        )
      }

      return children;
    }
  }
});
