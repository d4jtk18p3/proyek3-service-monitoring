import * as SubtugasDAO from '../dao/Subtugas'
import * as TugasDAO from '../dao/Tugas'
import * as StudiDAO from '../dao/Studi'
import * as PerkuliahaDAO from '../dao/Perkuliahan'
import * as MahasiswaDAO from '../dao/Mahasiswa'
import { validationResult } from 'express-validator/check'
import Subtugas from '../models/Subtugas'

export const postNewSubtugas = async (req, res, next) => {
    try {
    const {nama_subtugas, tenggat, id_tugas, id_studi } = req.body
    const now = new Date()
    const { createdAt, updatedAt} = now
    const error = validationResult(req)
    if (!error.isEmpty()) {
        error.status = 400
        throw error
    }
    const subtugas = await SubtugasDAO.insertOneSubtugas(nama_subtugas, tenggat, createdAt, updatedAt, id_tugas, id_studi)
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

export const getSubtugasByTugas = async (req, res, next) => {
    try {
        const id_tugas = req.params.id_tugas
        var subtugas = await SubtugasDAO.findSubtugasByTugas(id_tugas)
        var listSubtugas = []
        var i,j,k
        for(k=0; k<10; k++){
            for(i=0; i < subtugas.length; i++){
                for (j=i+1; j <subtugas.length; j++){
                    if (subtugas[i].nama_subtugas == subtugas[j].nama_subtugas){
                        subtugas.splice(j+1, 1)
                    }
                }
            }
        }
        res.status(200).json({
            message: 'get subtugas by tugas sukses',
            data: {
                subtugas
            }
        })
    }
    catch (error) {
        next(error)
    }
}