import * as SubtugasDAO from '../dao/Subtugas'
import * as TugasDAO from '../dao/Tugas'
import * as StudiDAO from '../dao/Studi'
import * as PerkuliahaDAO from '../dao/Perkuliahan'
import * as MahasiswaDAO from '../dao/Mahasiswa'
import { validationResult } from 'express-validator/check'

export const postNewSubtugas = async (req, res, next) => {
    try {
    const { id_subtugas, nama_subtugas, tenggat, id_tugas, id_studi } = req.body
    // buat manual, kalo butuh
    // let { id_tugas, nama_tugas, id_perkuliahan } = req.body
    // let temp = 101
    // if (id_perkuliahan == null) {
    //   id_perkuliahan = temp
    // }
    const now = new Date()
    const { createdAt, updatedAt} = now
    const error = validationResult(req)
    if (!error.isEmpty()) {
        error.status = 400
        throw error
    }
    const subtugas = await SubtugasDAO.insertOneSubtugas(id_subtugas, nama_subtugas, tenggat, createdAt, updatedAt, id_tugas, id_studi)
    res.status(200).json({
        message: 'insert subtugas sukses',
        data: {
            subtugas
        }
    })
}
    catch (error) {
        next(error)
    }
}

export const getSubtugasById = async (req, res, next) => {
    try {
        const id_subtugas = req.params.id_subtugas
        const subtugas = await SubtugasDAO.findSubtugasById(id_subtugas)
        res.status(200).json({
            message: 'get subtugas by id sukses',
            data: {
                subtugas
            }
        })
    }
    catch (error) {
        next(error)
    }
}