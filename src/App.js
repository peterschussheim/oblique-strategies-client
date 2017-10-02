import React, { Component } from 'react'
import './App.css'
import { randomizer } from './util'
import Footer from './Footer'
import Button from './Button'
import cards from './Cards.json'

class App extends Component {
  state = {
    currentCard: randomizer(cards),
    isRefreshEnabled: false,
    refreshSpeed: 3,
    showEdition: false
  }

  handleRefresh = event => {
    event.preventDefault()
    this.setState(prevState => ({
      currentCard: randomizer(cards)
    }))
    console.log(this.state)
  }

  render() {
    const { currentCard, showEdition } = this.state
    return (
      <div className="ma2">
        <Button onClick={this.handleRefresh}>Load another strategy...</Button>
        <Button onClick={this.handleRefresh}>Show Edition?</Button>
        <div className="mw7 center pa2 mt6 mb6 bg-gray">
          <header className="mw7-ns ml1 mr1 mt3 mb3 center">
            <h1 className="tc f3 f2-m f1-l fw2 mv3 mt0 black">
              {currentCard.content}
            </h1>
          </header>
          {showEdition ? (
            <span className=" fw2 silver mt0 lh-copy">
              <label>Edition: </label>
              {currentCard.edition}
            </span>
          ) : null}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
