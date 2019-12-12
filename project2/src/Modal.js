import React from "react"
import ReactDOM from "react-dom"

const Modal = ({counter}) =>
  (counter > 4)
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
              </div>
              AHAAAA! GOT YA! I see your burning desire to explore all the pages about me, thus, I got something special for you below. 
            <td><a href={"https://vladislavkl.github.io"}>Check it out!</a></td>
            
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null

export default Modal
