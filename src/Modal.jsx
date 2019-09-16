import React, { useRef } from 'react'
import './index.css'

const Modal = () => {
  const detailsRef = useRef(false)

  const onClose = () => {
    detailsRef.current.open = false
  }

  return (
    <div className="app">
      <details ref={detailsRef}>
        <summary>
          Status
        </summary>
        <div className="modal">
          <p>
            Requires a computer running an operating system. The computer must
            have some memory and ideally some kind of long-term storage. An
            input device as well as some form of output device is recommended.
          </p>
          <button onClick={onClose}>Close Modal</button>
        </div>
      </details>
    </div>
  )
}

export default Modal
