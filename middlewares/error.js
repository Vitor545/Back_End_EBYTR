const error = (err, _req, res, _next) => res.status(500).send({ mensage: err.message });

module.exports = error;