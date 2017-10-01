import React, { Component } from 'react'
import './App.css'
import { randomizer } from './util'
import cards from './Cards.json'

class App extends Component {
  state = {
    currentCard: randomizer(cards)
  }
  render() {
    return (
      <div>
        <header className="tc ph4">
          <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
            {this.state.currentCard.content}
          </h1>
          <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
            <label>Edition: </label>
            {this.state.currentCard.edition}
          </h2>
        </header>
      </div>
    )
  }
}

export default App
