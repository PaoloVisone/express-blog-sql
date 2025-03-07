const express = require('express')
const app = express()
// importiamo il middleware di CORS
const cors = require('cors')
const port = 3000

// Importo il router
const postRouter = require('./routers/posts');

// middlewares errorsHandler
const errorsHandler = require("./middlewares/errorHandler");

// middlewares notFound
const notFound = require("./middlewares/notFound");

// registro il middleware di CORS
app.use(cors({ origin: 'http://localhost:5173' }))

// Registro il body-parser
app.use(express.json());

// definiamo l'uso di una cartella per i file statici
app.use(express.static('imgs'));

// definiamo la rotta home
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Rotta
app.use("/posts", postRouter)

// Registo il middlewares errorsHandler
app.use(errorsHandler);

// Registo il middlewares notFound
app.use(notFound);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})