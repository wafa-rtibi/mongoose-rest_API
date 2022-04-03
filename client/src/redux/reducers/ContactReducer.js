//importation
import { FAIL, GET, LOAD } from "../actions/actionType";
//initile state
const initileState={
  contacts:[],
  error:null,
  load:false,
};
//pure function
const reducerContact=(state=initileState,{type,payload})=> {
  switch (type) {
    case LOAD:
      return { ...state, load:true };
    case GET:
      return { ...state,load:false,contacts:[...payload]};
    case FAIL:
      return { ...state, load: false, error:payload };
    default:
      return state;
  }
};
export default reducerContact;

