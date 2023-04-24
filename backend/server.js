const express = require('express');

// express app
const app = express();

// routes
app.get('/', (req,res) => {
    res.json({mssg: 'Welcome to my app'});
})

// listen for requests

app.listen(8080, () => {
        console.log("listening on port 8080 LaQuisha C.");
});