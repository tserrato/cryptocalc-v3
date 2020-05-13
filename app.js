const cmcURL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&CMC_PRO_API_KEY=cfc1cb36-d937-441c-8d9a-5964f940434c'
const filmsURL = 'https://ghibliapi.herokuapp.com/films'
prices = [];

const express = require('express');
const app = express();

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

app.get('/data', (request, response) =>{
    response.json(prices);
})



const fetch = require("node-fetch");
// Async/Await
const getData = async cmcURL => {
    try {
        const response = await fetch(cmcURL);
        const json = await response.json();
        prices.push(json.data[0].quote.USD.price);
        // console.log(btcPrice);
    } catch (error) {
        console.log(error);
    }
    try {
        const response = await fetch(cmcURL);
        const json = await response.json();
        prices.push(json.data[1].quote.USD.price);
        // console.log(ethPrice);
    } catch (error) {
        console.log(error);
    }
    try {
        const response = await fetch(cmcURL);
        const json = await response.json();
        prices.push(json.data[6].quote.USD.price);
        // console.log(ltcPrice);
    } catch (error) {
        console.log(error);
    }
    try {
        const response = await fetch(cmcURL);
        const json = await response.json();
        prices.push(json.data[13].quote.USD.price);
        // console.log(xmrPrice);
    } catch (error) {
        console.log(error);
    }
};
getData(cmcURL);