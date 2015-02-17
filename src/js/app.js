const React = require('react')
const jsonp = require('jsonp')

const App = React.createClass({
  getInitialState() {
    return {
      data: '...'
    }
  },

  getRequest() {
    jsonp(this.props.url, (err, body) => {
      if (err) body = err
      this.setState({
        data: body
      })
    })
  },

  componentDidMount() {
    if (this.isMounted()) this.getRequest()
  },

  render() {
    return (
      <p className={'data'}>{ this.state.data }</p>
    )
  }
})

module.exports = App
