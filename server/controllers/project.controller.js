const { Pet } = require('../models/project.model');

module.exports.create = (request, response) => {
    const { name, type, description, skill1, skill2, skill3 } = request.body;
    Pet.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
        // like
    })
        .then(pet => response.json(pet))
        .catch(err => response.json(err));
}

module.exports.getAll = (request, response) => {
    Pet.find()
        .then(allPets => response.json(allPets))
        .catch(err => response.json({ message: "Something is wrong", error: err }));
}

module.exports.getOne = (request, response) => {
    Pet.findOne({ _id: request.params.id })
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Pet.findByIdAndUpdate({ _id: request.params.id }, request.body, { runValidators: true, new: true })
        .then(updatedPet => response.json({ updatedPet }))
        .catch(err => response.json(err))
}

module.exports.delete = (request, response) => {
    Pet.findByIdAndDelete(request.params.id)
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.like = (request, response) => {
    Pet.findByIdAndUpdate({ _id: request.params.id }, { $inc: { likes: 1 } })
        .then(() => response.json({ msg: "liked" }))
        .catch(err => response.json(err))
}