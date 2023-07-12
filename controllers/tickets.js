const Flight = require('../models/flight');

async function show(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        res.render('flights/tickets/show', { title: 'Ticket Details', flight });
      } catch (err) {
        console.log(err);
    
        res.redirect('/flight');
      }
}

async function newTicket(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        res.render('flights/tickets/new', { title: 'New Ticket', flight });
      } catch (err) {
        console.log(err);
    
        res.redirect('/flight');
      }
}

async function create(req, res) {
    console.log('hello')
    const flight = await Flight.findById(req.params.id);
  
    flight.tickets.push(req.body);
  
    try {
      await flight.save();
    } catch (err) {
      console.log(err);
    }
  
    res.redirect(`/flights/tickets/${flight._id}-show`);
  }



module.exports = {
    show,
    create,
    new: newTicket
}