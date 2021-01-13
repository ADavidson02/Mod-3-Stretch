import "./App.css"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../Home/Home"
import Form from "../Form/Form"
import Archive from "../Archive/Archive"
import { Container } from "react-bootstrap"
// import { AuthProvider } from "../contexts/AuthContext"
import Modal from "react-modal"
Modal.setAppElement("body")



function App() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    console.log('OPEB!')
    setIsOpen(true)
  }
  const customStyles = {
    content: {
      top: "19%",
      left: "71%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#b3c6ff",
      opacity: "85%"
    },
  };
  function afterOpenModal() {
    subtitle.style.color = "#foo"
  }
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", flexDirection: "column" }}
    >
      <nav style={{ flexDirection: "row" }}>
        <h1>Advice</h1>
        <button onClick={openModal}>User Info</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}> Welcome Mike</h2>
          <p>Username: </p>
          <button onClick={closeModal}>X</button>
        </Modal>
      </nav>
      <div>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
              <Switch>
                <Route path="/archive" component={Archive} />
                <Route path="/add-new-advice" component={Form} />
                <Route exact path="/" component={Home} />
              </Switch>
          </Router>
        </div>
      </div>
    </Container>
  );
}

export default App;
