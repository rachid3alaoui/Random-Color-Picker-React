import React from 'react'
import ReactDOM from 'react-dom'
import { Random } from './components/Random'

class App extends React.Component {
  render() {
    return <Random />
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
