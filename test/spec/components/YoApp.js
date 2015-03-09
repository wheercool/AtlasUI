'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var YoApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    YoApp = require('components/YoApp.js');
    component = React.createElement(YoApp);
  });

  it('should create a new instance of YoApp', function () {
    expect(component).toBeDefined();
  });
});
