const posts = require('../data/posts');

function index(req, res) {
    // copiamo la logica dell'index

    // Bonus
    //Inizialmente, l'array d'oggetti filtrato corrisponde a quello originale
    let filteredPost = posts;

    // Se la richiesta contiene un filtro, allora filtriamo l'array
    if (req.query.tags) {
        filteredPost = posts.filter(post => post.tags.includes(req.query.tags));
    }
    // restituiamo la variabile filteredMenu
    // potrebbe essere stata filtrata o contenere l'array originale
    res.json(filteredPost);
}

function show(req, res) {
    // copiamo la logica della show

    // recupero l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerco il post tramite id
    const post = posts.find(post => post.id === id);

    // Faccio il controllo
    if (!post) {
        //Imposto lo status 404
        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    // Restituisci JSON
    res.json(post);
}

function store(req, res) {
    // copiamo la logica della store
    // console.log(req.body);
    // res.send('Creazione nuovo post');

    // Creiamo un nuovo id incrementando l'ultimo id presente
    const newId = posts[posts.length - 1].id + 1;

    // Creiamo un nuovo post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    }

    // Aggiungiamo il post
    posts.push(newPost);

    // controlliamo
    console.log(posts);

    // Restituiamo lo status corretto e la pizza appena creata
    res.status(201);
    res.json(newPost);
}

function update(req, res) {
    // copiamo la logica dell'update
    // res.send('Modifica integrale del post ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)
    // cerco il post tramite id
    const post = posts.find(post => post.id === id);
    // Piccolo controllo
    if (!post) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Post non trovata"
        })
    }
    // Aggiorniamo la pizza
    post.name = req.body.name;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(posts)
    // Restituiamo il post appena aggiornata
    res.json(post);
}

function modify(req, res) {
    // res.send('Modifica parziale della pizza ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id);

    // cerco il post tramite id
    const post = posts.find(post => post.id === id);

    // Facciamo il controllo
    if (!post) {

        // ritorno lo stato di errore 404, non trovato
        res.status(404);

        // ritorno un messaggio di errore (formato json)
        return res.json({
            error: "Not Found",
            message: "Post non trovata"
        })
    }

    //  modifichiamo i dati del post trovato
    // if (req.body.name) {
    //     post.name = req.body.name;
    // } else {
    //     post.name = post.name;
    // }
    // versione operatore ternario
    req.body.name ? post.name = req.body.name : post.name = post.name;
    req.body.image ? post.image = req.body.image : post.image = post.image;
    req.body.tags ? post.tags = req.body.tags : post.tags = post.tags;

    // stampiamo in console i posts
    console.log(posts);


    // ritorniamo l'oggetto modificato
    res.json(post);
};

function destroy(req, res) {
    // copiamo la logica della destroy..

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const post = posts.find(post => post.id === id);

    // Piccolo controllo
    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    // Rimuoviamo la pizza dal menu
    posts.splice(posts.indexOf(post), 1);

    // Verifichiamo sul terminale
    console.log(posts);

    // Restituiamo lo status corretto
    res.sendStatus(204)
}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }