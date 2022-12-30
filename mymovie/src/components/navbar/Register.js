import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button 
        className='btn-login'
        variant="danger" 
        onClick={handleShow}>
        Login / Register
      </Button>

      <Modal show={show} onHide={handleClose} className='loginRegister'>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" className='btn-lgn-submit' type="submit">
                    Login
                </Button>
                <Button variant="danger" className='btn-lgn-close' onClick={handleClose}>
                    Close
                </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            {/* <Form.Text className='register'>
                Buat Akun Baru? <a href='/'>Register</a>
            </Form.Text> */}
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;

// import React from 'react';

// const loginPage = () => {
//   return (
//     <div>
//          <button 
//             type="button" 
           
//             className="btn btn-danger btn-login" 
//             data-bs-toggle="modal"
//             data-bs-target="#staticBackdrop"
//           >
//           Login/Register
//           </button>
//         <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//         <div class="modal-dialog">
//             <div class="modal-content">
//             <div class="modal-header">
//                 <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//                 ...
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" class="btn btn-primary">Understood</button>
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default loginPage