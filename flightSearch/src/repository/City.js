const { City } = require("../models")

class CityRepository {

    static async createCity(name) {
        try {
            return await City.create({ name })
        } catch (error) {
            console.log('Error creating city.')
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
            await City.update(
                { name },
                {
                    where: {
                        id: id,
                    },
                },
            );
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
}

module.exports = CityRepository