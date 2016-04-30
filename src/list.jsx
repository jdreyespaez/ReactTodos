var React = require('react');
var ReactDOM = require('react-dom');
var ListItem = require('./list-item');

module.exports = React.createClass({
  render: function() {
    return <div>
      {this.renderList()}
    </div>
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
        var item = this.props.items[key];
        item.key = key;

        children.push(
          <ListItem
            item={item}
            key={key}
            >
          </ListItem>
        )
      }

      return children;
    }
  }
});
