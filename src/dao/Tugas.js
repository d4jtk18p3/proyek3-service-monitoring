import Tugas from '../models/Tugas'
import sequelize from '../db.js'

export const insertOneTugas = async (
    nama_tugas,
    status_progress,
    status_durasi,
    status_skala,
    status_catatan,
    status_lampiran,
    createdAt,
    updatedAt,
    id_perkuliahan,
    nip
    ) => {
        try {
            const tugas = await Tugas.create({
                nama_tugas,
                status_progress,
                status_durasi,
                status_skala,
                status_catatan,
                status_lampiran,
                createdAt,
                updatedAt,
                id_perkuliahan,
                nip
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

// export const findTugasByIdMahasiswa = async (id_mahasiswa) => {
//     try {
//         const tugas = await Tugas.findAll({
//             where: {
//                 id_mahasiswa
//             }
//         })
//         return tugas
//     }
//     catch (error) {
//         return Promise.reject(new Error('Find tugas by id gagal'))
//     }
// }