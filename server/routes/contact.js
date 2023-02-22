const router = require('express').Router();
const Contact = require('../model/Contact');

//Create Contact

router.post('/add/', async (req, res) => {
    const newContact = new Contact(req.body);
    try {
        const savedContact = await newContact.save();
        res.status(200).json(savedContact)
    } catch (err) {
        console.log(err)
        res.status(500);

    }
})
//Update contact

router.put('/edit/:id', async (req, res) => {
    try {
        await Contact.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json('your contact has been updated')

    } catch (err) {
        console.log(err)
        res.status(500)
    }
})
//Delete contact

router.delete('/view/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        await contact.delete();
        res.status(200).json('Contact has been deleted...')

    } catch (err) {
        console.log(err)
        res.status(500)
    }
})
// Get contact
router.get('/view/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.status(200).json(contact)

    } catch (err) {
        console.log(err)
        res.status(500)
    }
})


//Get  all contacts

router.get('/', async (req, res) => {
    try {
        const contact = await Contact.find();
        res.status(200).json(contact)

    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router;