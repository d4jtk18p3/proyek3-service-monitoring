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

export const findTugasBynip = async (nip) => {
    try {
        const tugas = await Tugas.findAll({
            where: {
                nip
            }
        })
        return tugas[0]
    }
    catch (error) {
        return Promise.reject(new Error('Find tugas by nip gagal'))
    }
}

export const findSubTugasById = async (id_tugas) => {
    try {
        const subtugas = await Subtugas.findAll({
            where: {
                id_tugas
            }
        })
        return subtugas[0]
    }
    catch (error) {
        return Promise.reject(new Error('Find subtugas by id tugas gagal'))
    }
}

export const findTugasById = async (id) => {
    try {
        const tugas = await Tugas.findAll({
            where: {
                id
            }
        })
        return tugas[0]
    }
    catch (error) {
        return Promise.reject(new Error('Find tugas by id gagal'))
    }
}