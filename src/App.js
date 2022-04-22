import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

function App() {

const [show, setShow] = useState(false)

const handleClose = () => setShow(false)
const handleShow = () => setShow(true)

  return (
    <div className="App">
      <button variant="primary" onClick={handleShow}>Modal</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is standard.  Don't forget to import react bootstrap css.  That is why your shit never works the first time.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close, but Blue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
