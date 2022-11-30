const express = require('express');

const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

//use express router
app.use('/', require('./routes'));

//setting view engine ejs
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`server is running on the port: ${port}`);
})

