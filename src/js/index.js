const React = require('react')
const $$    = require('tiny-element')
const App   = require('./app')

React.render(
  <App url={'//www.timeapi.org/utc/in+one+hour.json?format=%25H:%25M'} />,
  $$('#app')
)
