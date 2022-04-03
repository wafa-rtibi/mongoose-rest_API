import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { addContact } from "../redux/actions/actions";
import {Button} from 'react-bootstrap'
import "../style/add.css";


const AddContact = () => {
  const dispatch=useDispatch();
  const [newContact,setnewContact] = useState({name: "",email: "",phone: ""});
  const handleChange = (e) => {
    setnewContact({...newContact,[e.target.name]:e.target.value});
  };
  return (
    <div>
      <div className="center">
        <h1>Add new contact</h1>
        <form>
          <div className="inputbox">
            <input
              type="text"
              name="name"
              value={newContact.name}
              onChange={handleChange}
            />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name="email"
              value={newContact.email}
              onChange={handleChange}
            />
            <span>Email</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name="phone"
              value={newContact.phone}
              onChange={handleChange}
            />
            <span>Phone</span>
          </div>
          <Button variant="primary" type="submit" onClick={()=>dispatch(addContact(newContact))}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
