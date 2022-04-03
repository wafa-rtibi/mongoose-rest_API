import React, { useState } from 'react'
import {Button,Modal} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editContact } from '../redux/actions/actions';
import {Form} from 'react-bootstrap'

const ModalEdit = ({contact}) => {
    const dispatch=useDispatch()
    const [newContact, setnewContact] = useState({
    name:contact.name ,
    email:contact.email,
    phone:contact.phone,
    });
    const handleChange = (e) => {
        setnewContact({...newContact,[e.target.name]: e.target.value });
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleEdit =()=>{
        dispatch(editContact(contact._id,newContact))
        handleClose()
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
            Edit
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="name"
                    value={newContact.name}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type="email"
                    name="email"
                    value={newContact.email}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                    type="tel"
                    name="phone"
                    value={newContact.phone}
                    onChange={handleChange}
                    />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleEdit}>
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEdit