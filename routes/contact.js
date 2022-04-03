const express=require('express')
const { getContactById, deleteContact, editContact, getAllContact, addContact } = require('../controllers/contact')
const router=express.Router()


router.route('/contacts/:id').get(getContactById).delete(deleteContact).put(editContact)
router.get('/contacts',getAllContact)
router.post('/add',addContact)


module.exports=router