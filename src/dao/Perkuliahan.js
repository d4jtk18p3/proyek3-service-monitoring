import Perkuliahan from '../models/Perkuliahan'

export const findAllPerkuliahanById = async (id) => {
    try {
      const perkuliahan = await Perkuliahan.findAll({
        order: [['id', 'ASC']]
      })
      return perkuliahan
    } catch (error) {
      return Promise.reject(new Error('Get all Perkuliahan'))
    }
  }