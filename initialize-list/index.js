const { MongoClient } = require("mongodb");

const url = "<AzureCosmoDBConnectionString>";
const client = new MongoClient(url);

let resetList = [
    {
        _id: 1,
        author: "Esther Hicks",
        quote: 'A happy life is just a string of happy moments. But most people do not allow the happy moment, because they are so busy trying to get a happy life.'
    },
    {
        _id: 2,
        author: "Sebastian Cole",
        quote: 'Find that one person in life who makes you love more than any other person could possibly make you love, you treat every day together as if it were your last. You cherish every moment.'
    },
    {
        _id: 3,
        author: "Morrie Schwartz",
        quote: 'The most important thing in life is to learn how to give out love, and to let it come in'
    },
    {
        _id: 4,
        author: "Omar Khayyam",
        quote: 'Be happy for this moment. This moment is your life.'
    },
    {
        _id: 5,
        author: "Marcia Wieder",
        quote: 'Use your precious moments to live life fully every single second of every single day.'
    },
    {
        _id: 6,
        author: "Corita Kent",
        quote: 'Life is a succession of moments, to live each one is to succeed.'
    },
    {
        _id: 7,
        author: "Amit Ray",
        quote: 'Mindfulness is not chasing the moment but sipping the nectar of the moment.'
    },
    {
        _id: 8,
        author: "Eckhart Tolle",
        quote: 'Realize deeply that the present moment is all you have.'
    },
    {
        _id: 9,
        author: "Munia Khan",
        quote: 'Life is always more beautiful and worth living when you are capable of enjoying the beauty of nature.'
    },
    {
        _id: 10,
        author: "Benjamin Franklin",
        quote: 'If you would be loved, love, and be loveable.'
    },
    {
        _id: 11,
        author: "Richard Bach",
        quote: 'The best way to pay for a lovely moment is to enjoy it.'
    },
    {
        _id: 12,
        author: "Mark Twain",
        quote: 'The two most important days in your life are the day you are born and the day you find out why.'
    },
    {
        _id: 13,
        author: "Mae West",
        quote: 'You only live once; but if you do it right, once is enough.'
    },
    {
        _id: 14,
        author: "George Chakiris",
        quote: 'No matter how dark the moment, love, and hope are always possible.'
    },
    {
        _id: 15,
        author: "Dr. Seuss",
        quote: 'Sometimes the questions are complicated and the answers are simple.'
    },
    {
        _id: 16,
        author: "Helen Keller",
        quote: 'When we do the best we can, we never know what miracle is wrought in our life or the life of another.'
    }
]


module.exports = async function (context, req) {
    await client.connect();
    const database = client.db("<DatabaseName>");
    const collection = database.collection("<CollectionName>");
    await collection.deleteMany({});
    await collection.insertMany(resetList);

    context.res = {
        status: 200, /* Defaults to 200 */
        body: "Initialization success"
    };
}