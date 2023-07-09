const { MongoDriverError } = require('mongodb');
const Flight = require('../models/flight');

async function index(req, res) {
    title = 'Flights'
    try {
        const flights = await Flight.find({});
        res.render('flights/index', { flights });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }

}

function newFlight(req, res) {
    title = 'New Flight'
    res.render('flights/new', { errorMsg: '' })
}

async function create(req, res) {
    console.log(req.body);

    try {
        await Flight.create(req.body);
        res.redirect('/flights') 
    } catch (err) {
        console.log(err);
        res.render('flights.new', { errorMsg: err.message });
    }
}

module.exports = {
    create,
    index,
    new: newFlight
}