const { obtenerClientes } = require("../services/sheetsService");

async function tap(req, res) {

    const id = req.params.id;

    const clientes = await obtenerClientes();

    const cliente = clientes.find(fila => fila[0] === id);

    if (!cliente) {

        return res.status(404).send("Cliente no encontrado");

    }

    if (cliente[6] !== "TRUE" && cliente[6] !== true) {

        return res.status(403).send("NFC desactivado");

    }

    res.redirect(cliente[5]);

}

module.exports = {
    tap
};