const Contact=require('../model/Contact')

const addContact=async(req,res)=>{
    try {
        const {name,email,phone}=req.body
        const newContact=new Contact({name,email,phone})
        await newContact.save()
        res.status(200).send({newContact})
    } catch (error) {
        res.status(400).send('fail request')
    }
}
const editContact=async(req,res)=>{
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, { ...req.body });
        contact? res.status(200).send({ msg: "contact updated succesfuly", contact }) : res.status(400).send("this contact not exist");
    } catch (error) {
        res.status(400).send({msg:"sorry can't update"})
    }
}
const getContactById=async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
            try {
                contact? res.status(200).send(contact): res.status(404).send({ msg: "contact not found" });
            } catch (error) {
                console.log(error);
            }
}
const getAllContact=async(req,res)=>{
    try {
        const contacts=await Contact.find()
        res.status(200).send(contacts)
    } catch (error) {
        console.log(error)
        res.status(404).send({msg:'contacts not found'})
    }
}

const deleteContact=async(req,res)=>{
    try {
        const contact=await Contact.findByIdAndRemove(req.params.id)
        contact?
        res.status(200).send({ msg: "this contact is deleted", contact })
        :
        res.status(400).send("this contact not exist")
    } catch (error) {
        res.status(400).send({msg:'there is problem'})
    }
}
module.exports = {
    getContactById,
    editContact,
    deleteContact,
    getAllContact,
    addContact,
};