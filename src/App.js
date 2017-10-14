import React, { Component } from 'react'
import './App.css'
import { randomizer } from './util'
import Footer from './Footer'
import Button from './Button'
import Modal from './Modal'

import cards from './Cards.json'

const styles = {
  app: {
    height: '10em',
    width: '10em',
    background: 'lightblue',
    overflow: 'hidden'
  },
  modalRoot: {
    position: 'relative',
    zIndex: '999'
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    display: 'flex',
    height: '50%',
    width: '75%'
  },
  modalButton: {
    position: 'flex',
    height: '75%'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: randomizer(cards),
      isRefreshEnabled: false,
      refreshSpeed: 3,
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
            <p className="black">
              Oblique Strategies originated in the 1970s from two Gentlement...
            </p>
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
          <button
            className="dim bg-transparent pointer"
            onClick={this.handleShow}
          >
            &#8505;
          </button>
          {modal}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
