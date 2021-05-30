import Tugas from '../models/Tugas'
import sequelize from '../db.js'

export const insertOneTugas = async (
    id_tugas,
    nama_tugas,
    createdAt,
    updatedAt,
    id_perkuliahan
    ) => {
        try {
            const tugas = await Tugas.create({
                id_tugas,
                nama_tugas,
                createdAt,
                updatedAt,
                id_perkuliahan
            })
            return tugas
        }
            catch (error) {
            console.error(error)
        }
    }

export const findTugasById = async (id_tugas) => {
    try {
        const tugas = await Tugas.findByPk(id_tugas)
        return tugas
    }
    catch (error) {
        return Promise.reject(new Error('Find tugas by id gagal'))
    }
}

export const findTugasByPerkuliahan = async (id) => {
    try {
        const tugas = await Tugas.findAll({
            where: {
              id_perkuliahan: id
            }
          })
        return tugas
    }
    catch (error) {
        return Promise.reject(new Error('Find tugas by id gagal'))
    }
}