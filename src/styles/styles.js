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
    padding: '1em'
  },
  modalButton: {
    position: 'flex',
    alignItems: 'center',
    height: '75%'
  },
  modalSource: {
    paddingTop: '1em',
    paddingBottom: '1em'
  }
}

export default styles
