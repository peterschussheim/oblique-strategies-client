import React, { Component } from 'react'
import { randomizer } from './util'
import Footer from './Footer'
import Button from './Button'
import Modal from './Modal'

import cards from './Cards.json'

import './styles/App.css'
import styles from './styles/styles'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: randomizer(cards),
      showModal: false
    }
    this.handleRefresh = this.handleRefresh.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  handleRefresh(event) {
    event.preventDefault()
    this.setState(prevState => ({
      currentCard: randomizer(cards)
    }))
  }

  handleShow() {
    this.setState({ showModal: true })
  }

  handleHide() {
    this.setState({ showModal: false })
  }

  render() {
    const { currentCard, showModal } = this.state
    const modal = this.state.showModal ? (
      <Modal>
        <div style={styles.modal}>
          <button
            className="close dim fixed right-2 bg-transparent b--transparent top-2 pointer"
            styles={styles.modalButton}
            onClick={this.handleHide}
          >
            <img src={require('./assets/close.svg')} alt="close-modal" />
          </button>
          <div className="bg-blue" style={styles.modalContainer}>
            <p className="lh-copy black">
              <span>
                <a
                  target="wiki"
                  href="https://en.wikipedia.org/wiki/Oblique_Strategies"
                >
                  Oblique Strategies
                </a>
              </span>{' '}
              originally were a deck of printed cards created by Brian Eno and
              Peter Schmidt in 1975 with the goal to break creative blocks by
              encouraging lateral thinking. While originally targeted towards
              'traditional' creative fields such as music and writing, I believe
              these cards can be helpful to inspire and lift away mental
              'blocks'.
            </p>
            <p className="lh-copy black">
              <span>
                See also:
                <ul>
                  <li>
                    <a
                      target="ex1"
                      href="http://www.rtqe.net/ObliqueStrategies/"
                    >
                      The Oblique Strategies Web Site
                    </a>
                  </li>
                  <li>
                    <a
                      target="ex1"
                      href="http://www.joshharrison.net/oblique-strategies/"
                    >
                      Random Oblique Strategies
                    </a>
                  </li>
                  <li>
                    <a
                      target="ex1"
                      href="http://stoney.sb.org/eno/oblique.html"
                    >
                      Stoney's Oblique Strategies
                    </a>
                  </li>
                </ul>
              </span>
            </p>
            <div style={styles.modalSource}>
              <a
                className="link pa-1 hover-bg-white black"
                target="gh"
                href="https://github.com/peterschussheim/oblique-strategies-client"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </Modal>
    ) : null

    return (
      <div
        className={showModal ? `blur ma2 bg-blue` : `blur-removed ma2 bg-blue`}
      >
        <Button onClick={this.handleRefresh}>Load another strategy...</Button>
        <div className="mw7-ns center pa3 mt4 mb4">
          <header className="ml1 mr1 mt3 mb3 center">
            <h1 className="f3 f2-m f1-l tc f-subheadline lh-title fw2 mv3 mt0 black">
              {currentCard.content}
            </h1>
          </header>
          {modal}
        </div>
        <div className="flex items-center justify-center pa4 bg-white">
          <a className="ba hover-bg-blue pointer pa2" onClick={this.handleShow}>
            More Information
          </a>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
