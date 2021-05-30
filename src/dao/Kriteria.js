import Kriteria from '../models/Kriteria'
import sequelize from '../db.js'

export const insertOneKriteria = async (
    id_kriteria,
    status_progress,
    status_durasi,
    status_skala,
    status_catatan,
    status_lampiran,
    createdAt,
    updatedAt,
    id_subtugas,
    nim
    ) => {
        try {
            const kriteria = await Kriteria.create({
                id_kriteria,
                status_progress,
                status_durasi,
                status_skala,
                status_catatan,
                status_lampiran,
                createdAt,
                updatedAt,
                id_subtugas,
                nim
            })
            return kriteria
        }
            catch (error) {
            console.error(error)
        }
    }

export const findKriteriaById = async (id_kriteria) => {
    try {
        const kriteria = await Kriteria.findByPk(id_kriteria)
        return kriteria
    }
    catch (error) {
        return Promise.reject(new Error('Find kriteria by id gagal'))
    }
}