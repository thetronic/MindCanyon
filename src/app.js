import React from 'react'
import ReactDOM from 'react-dom'
// import gif from './assets/giphy.gif'

class App extends React.Component {
  render() {
    return (
      <>
      <h1>MindCanyon!</h1>
      <h1>for goats</h1>
      <img src='./assets/giphy.gif' alt='goats'/>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)