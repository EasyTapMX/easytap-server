const { google } = require("googleapis");

const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: [
        "https://www.googleapis.com/auth/spreadsheets"
    ]
});

async function getSheets() {
    const client = await auth.getClient();

    return google.sheets({
        version: "v4",
        auth: client
    });
}

module.exports = {
    getSheets
};