const { City } = require("../models")
const {Op} = require('sequelize');

class CityRepository {

    static async createCity(name) {
        try {
            return await City.create({ name })
        } catch (error) {
            console.log('Error creating city.', error)
            throw error
        }
    }

    static async getCity(id) {
        try {
            return await City.findByPk(id)
        } catch (error) {
            console.log('Error getting city.')
            throw error
        }
    }

    static async updateCity(id, name) {
        try {
            const city = await City.findByPk(id)
            city.name = name
            city.save()

            return city
        } catch (error) {
            console.log('Error updating city.')
            throw error
        }
    }

    static async deleteCity(id) {
        try {
            return await City.destroy({
                where: {
                    id,
                },
            });

        } catch (error) {
            console.log('Error creating city.')
            throw error
        }
    }

    static async getAllCities(filter) {
        try {
            if (filter.name) {
                return await City.findAll({
                    where: {
                        name: {
                            [Op.like]: `${filter.name}%`,
                        },
                      },
                })
            }
            return await City.findAll()

        } catch (error) {
            console.log('Error getting all cities.')
            throw error
        }
    }
}

module.exports = CityRepository