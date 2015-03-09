'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');
var Foo = require('./Foo');
var Alert = require('react-bootstrap').Alert;
var ProgressBar = require('react-bootstrap').ProgressBar;

var imageURL = require('../../images/yeoman.png');

var YoApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
          <div className="mainDiv">
              <ProgressBar bsStyle="success" now={40} />
              <ProgressBar bsStyle="info" now={20} />
              <ProgressBar bsStyle="warning" now={60} />
              <ProgressBar bsStyle="danger" now={80} />
          </div>
      </div>
    );
  }
});
React.render(<YoApp />, document.getElementById('content')); // jshint ignore:line

module.exports = YoApp;
