import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllContact } from '../redux/actions/actions';
import {Spinner} from 'react-bootstrap'
import CardContact from './CardContact';
const ListCard = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((el) => el.reducerContact.contacts);
    const load = useSelector((el) => el.reducerContact.load);
    useEffect(() => {
    dispatch(getAllContact())
    }, [dispatch])
    
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
            load?
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                contacts.map(el=><CardContact key={el._id} contact={el}/>)
            }
        </div>
    )
}

export default ListCard