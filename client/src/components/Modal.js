import React from 'react'



const Modal= props => {

    return(
        // <CSSTransition in={props.show} unmountOnExit timeout={{enter: 0, exit: 300 }}>
       
        <div className={`modal ${props.show ? "show" : ""}`} aria-hidden="true" onClick={props.onClose}>
        <div className="modal-dialog">
          <div className="modal-content" onClick={e => e.stopPropagation()}> 
          {/* </CSSTransition> */}
            <div className="modal-header">
            <h4>Subscribe to Our Newsletter!</h4>
              <div className="modal-title" > {props.title}
              </div>
              </div>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
  
                </button>
              
              <div className="modal-body"> {props.children}
                <input type="text" placeholder="First and Last Name" />
                <input type="text" placeholder="E-mail Address"/>
              </div>
              <div className="modal-footer">
                <button onClick={props.onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button onClick={props.onSubmit} type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
              </div>
            
          </div>
        </div>
      </div>
    )
} 
export default Modal 
