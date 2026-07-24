const { getSheets } = require("../config/google");

const SPREADSHEET_ID = "1vbK0c-TuY1dtqldN4EaxwUEGt0I2OGM6l3kpxbbwWNo";

async function obtenerClientes() {

    const sheets = await getSheets();

    const response = await sheets.spreadsheets.values.get({

        spreadsheetId: SPREADSHEET_ID,

        range: "Clientes!A:J"

    });

    return response.data.values;

}

module.exports = {
    obtenerClientes
};