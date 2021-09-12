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

export const getContacts = (req,res) => {
      console.log(req.body);
    Contact.find({},(err,contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}


export const getSingleContact = (req,res) => {
      console.log(req.body);
    Contact.findById(req.params.id,(err,contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}
