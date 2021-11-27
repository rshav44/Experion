const travelDao = require('../dao/travel.dao');
var travelController = {
    addTravel: addTravel,
    findTravels: findTravels,
    findTravelById: findTravelById,
    updateTravel: updateTravel,
    deleteById: deleteById
}

function addTravel(req, res) {
    let travel = req.body;
    travelDao.create(travel).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTravelById(req, res) {
    travelDao.findById(req.params.ProudID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    travelDao.deleteById(req.params.ProudID).
        then((data) => {
            res.status(200).json({
                message: "Travel deleted successfully",
                travel: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTravel(req, res) {
    travelDao.updateTravel(req.body, req.params.ProudID).
        then((data) => {
            res.status(200).json({
                message: "Travel updated successfully",
                travel: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTravels(req, res) {
    travelDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = travelController;