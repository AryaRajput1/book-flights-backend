const { CityService } = require("../services")

const createCity = async (req, res) => {
    try {
        const city = await CityService.createCity(req.body.name)

        res.status(201).send({
            message: 'City created successfully.',
            success: true,
            data: city,
            err: null
        })
    } catch (error) {
        console.log('Error creating city.')

        res.status(500).send({
            message: 'Error while creating city.',
            success: false,
            data: null,
            err: error
        })
    }
}

const getCity = async (req, res) => {
    try {
        const city = await CityService.getCity(req.params.id)

        res.status(200).send({
            message: 'query successfull.',
            success: true,
            data: city,
            err: null
        })
    } catch (error) {
        console.log('Error getting city.')
        res.status(500).send({
            message: 'Error while getting city.',
            success: false,
            data: null,
            err: error
        })
    }
}

const updateCity = async (req, res) => {
    try {
        const city = await CityService.updateCity(req.params.id, req.body.name)

        res.status(200).send({
            message: 'City updated successfully.',
            success: true,
            data: city,
            err: null
        })
    } catch (error) {
        console.log('Error updating city.')
        res.status(500).send({
            message: 'Error while updating city.',
            success: false,
            data: null,
            err: error
        })
    }
}

const deleteCity = async (req, res) => {
    try {
        const city = await CityService.deleteCity(req.params.id)

        res.status(200).send({
            message: 'City deleted successfully.',
            success: true,
            data: city,
            err: null
        })
    } catch (error) {
        console.log('Error deleting city.')
        res.status(500).send({
            message: 'Error while deleting city.',
            success: false,
            data: null,
            err: error
        })
    }
}

const getAllCities = async (req, res) => {
    try {
        const cities = await CityService.getAllCities(req.query)

        res.status(200).send({
            message: 'query successfull.',
            success: true,
            data: cities,
            err: null
        })
    } catch (error) {
        console.log('Error while getting cities.')
        res.status(500).send({
            message: 'Error while getting cities.',
            success: false,
            data: null,
            err: error
        })
    }
}

module.exports = {
    createCity,
    deleteCity,
    updateCity,
    getCity,
    getAllCities
}