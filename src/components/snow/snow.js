import React, { Component } from 'react'
import RectangleEmitter from './lib/rectangle-emitter'
import SnowParticle from './lib/snow-particle'
import './snow.css'

class Snow extends Component {
  componentDidMount() {
		const canvas = this.canvas
		canvas.width = canvas.offsetWidth
		canvas.height = canvas.offsetHeight

		const emitter = Object.create(RectangleEmitter)
		emitter.setBlastZone(0, -10, canvas.width, 1)
		emitter.setParticle(SnowParticle)
		emitter.setCanvas(canvas)
		emitter.runAhead(0)
		emitter.start(60)
  }

  render() {
    return (
      <canvas className="snow" ref={(canvas) => { this.canvas = canvas }}></canvas>
    )
  }
}

export default Snow
