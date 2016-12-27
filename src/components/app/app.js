import React, { Component } from 'react'
import WinterForst from './winterforest.png'
import './app.css'

import Snow from '../snow/snow'
import Present from '../present/present'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => this.setState({ ready: true }), 1000)
  }

  render() {
    return (
      <div className={['app', this.state.ready && 'ready'].join(' ')} style={{ backgroundImage: `url(${WinterForst})` }}>
        <Snow />
        <Present />
        <Present />
        <Present />
        <Present />
      </div>
    )
  }
}

export default App
