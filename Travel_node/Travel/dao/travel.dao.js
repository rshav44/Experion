const Travel = require('../models/employeeRegistration');
var gigDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateTravel: updateTravel
}

function findAll() {
    return Travel.findAll();
}

function findById(ProudID) {
    return Travel.findByPk(ProudID);
}

function deleteById(ProudID) {
    return Travel.destroy({ where: { ProudID: ProudID } });
}

function create(gig) {
    var newTravel = new Travel(gig);
    return newTravel.save();
}

function updateTravel(gig, ProudID) {
    var updateTravel = {
        TravelName: gig.TravelName,
        Price: gig.Price,
        ManufacturingDate: gig.ManufacturingDate,
        ExpirationDate: gig.ExpirationDate,
        Brand:gig.Brand
    };
    return Travel.update(updateTravel, { where: { ProudID: ProudID } });
}
module.exports = gigDao;