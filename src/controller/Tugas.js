import * as TugasDAO from '../dao/Tugas'
import { validationResult } from 'express-validator/check'

export const postNewTugas = async (req, res, next) => {
  try {
    const { id_tugas, nama_tugas, createdAt, UpdateAt, id_perkuliahan } = req.body
    const error = validationResult(req)
    
      if (!error.isEmpty()) {
        error.status = 400
        throw error
      }
    
      const dosen = await TugasDAO.insertOneTugas(id_tugas, nama_tugas, createdAt, UpdateAt, id_perkuliahan)
    
      res.status(200).json({
        message: 'insert tugas sukses',
        data: {
          tugas
        }
      })
  }
  catch (error) {
    next(error)
  }
}

export const getTugasById = async (req, res, next) => {
    try {
        const id_tugas = req.params.id
        const tugas = await TugasDAO.findTugasById(id_tugas)
        res.status(200).json({
            message: 'get tugas by id sukses',
            data: {
                tugas
            }
        })
    }
    catch (error) {
        next(error)
    }
}