import {addNewContact, getContacts, getSingleContact, updateContact} from '../controllers/controller';

const routes = (app) => {

    app.route('/contact').get((req,res,next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}}`);
        console.log(`Request typer: ${req.method}`);
        next();
        
    }, getContacts);

    app.route('/contact').post(addNewContact);

    app.route('/contact/:id').put(updateContact);

      app.route('/contact/:id').get(getSingleContact)

    app.route('/contact/:id').delete(deleteContact);
};

export default routes;