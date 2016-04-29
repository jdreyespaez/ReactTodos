var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return <h1 className="red">
      Hello, React!
    </h1>
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
