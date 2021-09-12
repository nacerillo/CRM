import {addNewContact, getContacts, getSingleContact} from '../controllers/controller';

const routes = (app) => {

    app.route('/contact').get((req,res,next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}}`);
        console.log(`Request typer: ${req.method}`);
        next();
        
    }, getContacts);

    app.route('/contact').post(addNewContact);

    app.route('/contact/:id').put((req,res) => {
        res.send('PUT request successful')
    });

      app.route('/contact/:id').get(getSingleContact)

    app.route('/contact/:id').delete((req,res) => {
        res.send('Delete request successful')
    });
};

export default routes;