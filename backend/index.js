const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const countryModel = require('./Models/Country');
const app = express();

app.use(cors());


app.get('/getallcountrys', async(req, res)=> {
    try {
        let allCountry = await countryModel.find()
        res.send(allCountry);
    } catch (err) {
        res.status(500).send(err);
    }
})

app.get('/getCountryByName', async(req, res) => {
    try {
        let country = await countryModel.findOne({name: req.body.name});
        res.send(country);
    }catch (err) {
        res.status(500).send(err);
    }
});

app.get('/getCountriesByRegion', async(req, res) =>{
    try {
        let countries = await countryModel.find({region: req.body.region});
        res.send(countries);
    }
    catch (err) {
        res.status(500).send(err);
    }
});

app.listen(4000,() => (console.log('Server running on port 4000')));