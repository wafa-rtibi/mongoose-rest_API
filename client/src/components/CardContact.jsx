import React from "react";
import {useDispatch} from 'react-redux'
import { deleteContactById } from "../redux/actions/actions";
import {Card,Button} from 'react-bootstrap'
import ModalEdit from "./ModalEdit";
const CardContact = ({ contact }) => {
  const dispatch=useDispatch()
  return (
    <Card style={{ width: "15rem" ,margin:'5px',display:'flex', flexDirection:'column'}}>
      <Card.Img
        variant="top"
        src="https://img.freepik.com/free-vector/person-avatar-design_24877-38137.jpg"
      />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text>{contact.phone}</Card.Text>
        <ModalEdit contact={contact}/>
        <Button style={{margin:'2px'}} variant="primary" onClick={()=>dispatch(deleteContactById(contact._id))}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardContact;
