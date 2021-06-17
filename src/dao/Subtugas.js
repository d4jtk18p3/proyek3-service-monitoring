import Subtugas from '../models/Subtugas'
import sequelize from '../db.js'

export const insertOneSubtugas = async (
    nama_subtugas,
    tenggat,
    createdAt,
    updatedAt,
    id_tugas,
    id_studi
    ) => {
        try {
            const subtugas = await Subtugas.create({
                nama_subtugas,
                tenggat,
                createdAt,
                updatedAt,
                id_tugas,
                id_studi
            })
            return subtugas
        }
            catch (error) {
            console.error(error)
        }
    }

export const findSubtugasById = async (id_subtugas) => {
    try {
        const subtugas = await Subtugas.findByPk(id_subtugas)
        return subtugas
    }
    catch (error) {
        return Promise.reject(new Error('Find subtugas by id gagal'))
    }
}

export const findSubtugasByTugas = async (id_tugas) => {
  try {
    const subtugas = await Subtugas.findAll({
      where: {
        id_tugas: id_tugas
      }
    })
    return subtugas
  }
  catch (error) {
    return Promise.reject(new Error('Find subtugas by tugas gagal'))
  }
}

export const UpdateOneSubtugas = async (id_subtugas, nama_subtugas, tenggat, updatedAt) => {
  try {
    const subtugas = await Subtugas.findByPk(id_subtugas)
    subtugas.nama_subtugas = nama_subtugas
    subtugas.tenggat = tenggat
    subtugas.updatedAt = updatedAt
    await subtugas.save()
    return subtugas
  }
  catch (error) {
    return Promise.reject(new Error('Update subtugas gagal'))
  }
}