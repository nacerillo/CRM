import mongoose from 'mongoose';

import {ContactSchema} from '../models/model';

const Contact = mongoose.model('contact',ContactSchema);

export const addNewContact = (req,res) => {
    console.log(req.body);
    let newContact = new Contact(req.body);

    newContact.save((err,contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

