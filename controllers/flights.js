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
    try {
        await Flight.create(req.body);
        res.redirect('/flights') 
    } catch (err) {
        console.log(err);
        res.render('flights.new', { errorMsg: err.message });
    }
}

async function show(req, res) {

    try {
      const flight = await Flight.findById(req.params.id);
  
      res.render('flights/show', { title: 'Flight Details', flight });
    } catch (err) {
      console.log(err);
  
      res.redirect('/flight');
    }
  }

module.exports = {
    create,
    index,
    new: newFlight,
    show
}