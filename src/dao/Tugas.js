import Tugas from '../models/Tugas'
import sequelize from '../db.js'

export const insertOneTugas = async (
    id_tugas,
    nama_tugas,
    createdAt,
    UpdateAt,
    id_perkuliahan
    ) => {
        try {
            const tugas = await Tugas.create({
            id_tugas,
            nama_tugas,
            createdAt,
            UpdateAt,
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
        const tugas = await Tugas.findAll({
            where: {
                id_tugas
            }
        })
        return tugas[0]
    }
    catch (error) {
        return Promise.reject(new Error('Find tugas by id gagal'))
    }
}