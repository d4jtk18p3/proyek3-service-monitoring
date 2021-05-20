import * as TugasDAO from '../dao/Tugas'
import { validationResult } from 'express-validator/check'

export const postNewTugas = async (req, res, next) => {
  try {
    const { id_tugas, nama_tugas, id_perkuliahan } = req.body
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
      const tugas = await TugasDAO.insertOneTugas(id_tugas, nama_tugas, createdAt, updatedAt, id_perkuliahan)
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