// Intercetto i possibili errori dell'applicazione
function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: err.message,
    });
};
module.exports = errorsHandler;