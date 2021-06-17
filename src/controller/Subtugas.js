import * as SubtugasDAO from '../dao/Subtugas'
import * as TugasDAO from '../dao/Tugas'
import * as StudiDAO from '../dao/Studi'
import * as PerkuliahaDAO from '../dao/Perkuliahan'
import * as MahasiswaDAO from '../dao/Mahasiswa'
import { validationResult } from 'express-validator/check'
import Subtugas from '../models/Subtugas'

export const updateSubtugas = async (req, res, next) => {
  try {
    const { id } = req.params
    const UpdateSubtugas = await SubtugasDAO.updateSubtugas(id, req.body.Progress, req.body.skalaPemahaman, req.body.Catatan)
    if (UpdateSubtugas === 1) {
      const subtugas = await SubtugasDAO.findOneSubtugasById(id)
      res.status(200).json({
        message: "Subtugas berhasil di update",
        data: {
          subtugas
        }
      })
    } else {
      const error = new Error("Subtugas gagal di update")
      error.statusCode = 500
      error.cause = 'Subtugas gagal di update'
      throw error
    }
  } catch (error) {
    next(error)
  }
}

export const updateSubtugasLampiran = async (req, res, next) => {
  try {
    const { id } = req.params
    const UpdateSubtugasLampiran = await SubtugasDAO.updateSubtugasLampiran(id, req.body.Lampiran)
    if(UpdateSubtugasLampiran === 1) {
      const subtugas = await SubtugasDAO.findOneSubtugasById(id)
      res.status(200).json({
        message: "Subtugas Berhasil di Update",
        data: {
          subtugas
        }
      })
    } else {
      const error = new Error("Subtugas gagal di update")
      error.statusCode = 500
      error.cause = 'Subtugas gagal di update'
      throw error
    } 
    }catch (error) {
      next(error)
    }
}

export const getSubTugasById = async (req, res, next) => {
    try {
        const { id } = req.params
        const subtugas = await SubtugasDAO.findOneSubtugasById(id)
        res.status(200).json({
          message: 'get subtugas by id tugas sukses',
          data: {
            subtugas
          }
        })
    }
    catch (error) {
        next (error)

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