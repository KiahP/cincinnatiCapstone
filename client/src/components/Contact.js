import React from 'react';
import Modal from './Modal'
import {useState} from 'react';

const Contact = () => {

  
  // const [show, setShow] = useState(false); 
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  
    return (
      
    

        <div id='contact-body'>
             <div class="w3-container w3-content w3-padding-64" style={{maxWidth:"800px"}} id="contact">
    <h2 class="w3-wide w3-center">CONTACT</h2>
    <p class="w3-opacity w3-center"><i>Want to reach us?</i></p>
    <div class="w3-row w3-padding-32">
      <div class="w3-col m6 w3-large w3-margin-bottom">
        <i class="fa fa-map-marker" style={{width:'30px'}}></i> Ohio, US<br/>
        <i class="fa fa-phone" style={{width:'30px'}}></i> Phone: +1 513-xxx-xxx <br/>
        <i class="fa fa-envelope" style={{width:'30px'}}> </i> Email: mail@mail.com<br/>
      </div>
      <div class="w3-col m6">
        <form action="/action_page.php" target="_blank">
          <div class="w3-row-padding" style={{margin:"0 -16px 8px -16px"}}>
            <div class="w3-half">
              <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
            </div>
            <div class="w3-half">
              <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"/>
            </div>
          </div>
          <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"/>
          <button class="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
        </form>
        <br/>


      </div>
      <div>
    {/* <button onClick={handleShow } className="btn btn-dark">Subscribe to Our Newsletter!</button> */}
      {/* <Modal title="Newsletter" onClose={handleClose} show={show}>
        <p>Modal Body</p>
      </Modal> */}
    </div>
    </div>
  </div>
 
        </div>

        
    )
}

export default Contact
