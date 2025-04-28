const { CityService } = require("../services")

class CityController {

    static async createCity(name) {
        try {
            return await CityService.createCity(name)
        } catch (error) {
            console.log('Error creating city.')
            throw error
        }
    }

    static async getCity(id) {
        try {
            return await CityService.getCity(id)
        } catch (error) {
            console.log('Error getting city.')
            throw error
        }
    }

    static async updateCity(id, name) {
        try {
            return await CityService.updateCity(id, name)
        } catch (error) {
            console.log('Error updating city.')
            throw error
        }
    }

    static async deleteCity(id) {
        try {
            return await CityService.deleteCity(id)

        } catch (error) {
            console.log('Error creating city.')
            throw error
        }
    }
}

module.exports = {
    CityController
}