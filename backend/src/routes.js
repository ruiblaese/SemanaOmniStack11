const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Home
routes.post('/', (request, response) => {
    return response.json({
        msg: "Wait! Project in progress."
    })
});

//Session
routes.post('/sessions', SessionController.create);

//ONG
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//Profile
routes.get('/profile', ProfileController.index);


module.exports = routes;