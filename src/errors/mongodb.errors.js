const notFoundError = (res) => {
    return res
        .status(404)
        .send("Este não não foi encontrado no Banco de Dados.");
};

module.exports = {
    notFoundError,
};
