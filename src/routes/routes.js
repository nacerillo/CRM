const routes = (app) => {

    app.route('/contact').get((req,res,next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}}`);
        console.log(`Request typer: ${req.method}`);
        next();
        
    }, (req,res,next) => {
        res.send('GET request successful')
    });

    app.route('/contact').post((req,res) => {
        res.send('POST request successful')
    });

    app.route('/contact/:id').put((req,res) => {
        res.send('PUT request successful')
    });

    app.route('/contact/:id').delete((req,res) => {
        res.send('Delete request successful')
    });
};

export default routes;