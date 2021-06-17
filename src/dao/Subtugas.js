import Subtugas from '../models/Subtugas'
import sequelize from '../db.js'

export const updateSubtugas = async (id, Progress, skalaPemahaman, Catatan) => {
  try {
    const subtugas = await Subtugas.update(
      {
        progress: Progress,
        skala_pemahaman: skalaPemahaman,
        catatan: Catatan,
      },
      {
        where: {
          id
        },
        silent: true
      }
    )
    return subtugas[0]
  } catch (error) {
      console.error(error)
  }
}

export const updateSubtugasLampiran = async (id, Lampiran) => {
  try {
    const subtugas = await Subtugas.update(
      {
        lampiran: Lampiran
      },
      {
        where: {
          id
        },
        silent: true
      }
    )
    return subtugas[0]
  } catch (error) {
    console.log(error)
  }
}

export const findOneSubtugasById = async (id) => {
    try {
      const subtugas = await Subtugas.findAll({
        where: {
          id
        }
      })
      return subtugas[0]
    } catch (error) {
      console.error(error)
    }
  }


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
    } catch (error) {
      return Promise.reject(new Error('Find subtugas by tugas gagal'))
    }
  }