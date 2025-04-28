const { CityRepository } = require("../repository")

class CityService {

    static async createCity(name) {
        try {
            return await CityRepository.createCity(name)
        } catch (error) {
            console.log('Error creating city.')
            throw error
        }
    }

    static async getCity(id) {
        try {
            return await CityRepository.getCity(id)
        } catch (error) {
            console.log('Error getting city.')
            throw error
        }
    }

    static async updateCity(id, name) {
        try {
            return await CityRepository.updateCity(id, name)
        } catch (error) {
            console.log('Error updating city.')
            throw error
        }
    }

    static async deleteCity(id) {
        try {
            return await CityRepository.deleteCity(id)

        } catch (error) {
            console.log('Error creating city.')
            throw error
        }
    }

    static async getAllCities(filter) {
        try {
            return await CityRepository.getAllCities({ name: filter.name })

        } catch (error) {
            console.log('Error getting all cities.')
            throw error
        }
    }
}

module.exports = {
    CityService
}