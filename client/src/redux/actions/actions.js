//importation
import { FAIL, GET, LOAD } from "./actionType";
import axios from "axios";

//get all contact
export const getAllContact = () => async (dispatch) => {
  dispatch({ type: LOAD }); // la premier chose lorsque on demande data from data base  est load
  try {
    let result = await axios.get("/api/contacts");
    dispatch({ type: GET, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response });
  }
};
//add contact
export const addContact = (newContact) => async (dispatch) => {
  try {
    await axios.post("/api/add",newContact);
    dispatch(getAllContact());
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response });
  }
};
//delete one
export const deleteContactById = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    dispatch(getAllContact());
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response });
  }
};
//edit contact
export const editContact = (id, contact) => async (dispatch) => {
  try {
    await axios.put(`/api/contacts/${id}`, contact);
    dispatch(getAllContact());
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response });
  }
};
