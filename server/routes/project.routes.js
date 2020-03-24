const PetController = require('../controllers/project.controller');
module.exports = function (app) {
    app.post('/api/pets/new', PetController.create);
    app.get('/api/pets', PetController.getAll);
    app.get('/api/pets/:id', PetController.getOne);
    app.delete('/api/pets/:id', PetController.delete);
    app.put('/api/pets/:id', PetController.update);
    app.put('/api/pets/:id', PetController.like);
}