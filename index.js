const auth = require('./middleware/authenticate');
const express = require('express');
//const { urlencoded } = require('express');
const app = express();
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());


app.use('/api/authors', require('./routers/authors'));
app.use('/api/books', require('./routers/books'));

app.use('/api/users', require('./routers/users'));
app.use('/', (req, res) => {
    res.status(404).send('Incorrect URL!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log('Listening to port ' + PORT));
module.exports = app;