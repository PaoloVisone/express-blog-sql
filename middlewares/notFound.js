//middlewares se viene chiamata una rotta inesistente
function notFound(req, res, next) {
    res.status(404)
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    });
};

module.exports = notFound;