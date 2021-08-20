const { MongoClient } = require("mongodb");
const {v4: uuidv4} = require("uuid");

const url = "<AzureCosmoDBConnectionString";
const client = new MongoClient(url);

module.exports = async function (context, req) {
    await client.connect();
    const database = client.db("<DatabaseName>");
    const collection = database.collection("<CollectionName>");
    let rand = Math.floor(Math.random() * 17 + 1);

    let obj = await collection.findOne({_id: rand});
    if (!obj) {
        return context.res = {
            status: 400,
            body: "not found"
        };
    }
    return context.res = {
        status: 200, 
        body: obj
    };
}