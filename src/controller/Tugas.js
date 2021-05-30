import * as TugasDAO from '../dao/Tugas'
import * as StudiDAO from '../dao/Studi'
import * as PerkuliahaDAO from '../dao/Perkuliahan'
import * as MahasiswaDAO from '../dao/Mahasiswa'
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

export const getTugasByMatkul = async (req, res, next) => {
  try {
        const id_matkul = req.params.id
        const perkuliahan = await PerkuliahaDAO.findPerkuliahanByMatkul(id_matkul)
        var i
        var listTugas = []
        for (i = 0; i < perkuliahan.length; i++){
          var tugas = await TugasDAO.findTugasByPerkuliahan(perkuliahan[i].id)
          listTugas.push(tugas)
        }
        res.status(200).json({
            message: 'get tugas by matkul sukses',
            data: {
                listTugas
            }
        })
    }
    catch (error) {
        res.status(error.status).json({ error })
    }
}

export const getAllMahasiswaAssignedTugas = async (req, res, next) => {
  try {
        const id_tugas = req.params.id
        const tugas = await TugasDAO.findTugasById(id_tugas)
        const perkuliahan = await PerkuliahaDAO.findPerkuliahanById(tugas.id_perkuliahan)
        var studi = await StudiDAO.findStudiByIdPerkuliahan(perkuliahan.id)
        var i
        var listNamaMahasiswa = []
        var listNIMMahasiswa = []
        for (i = 0; i < studi.length; i++){
          var mahasiswa = await MahasiswaDAO.findOneMahasiswaByNIM(studi[i].id_mahasiswa)
          listNamaMahasiswa.push(mahasiswa.nama)
          listNIMMahasiswa.push(mahasiswa.nim)
        }
        res.status(200).json({
            message: 'get mahasiswa by matkul sukses',
            data: {
              // tugas,
              // perkuliahan,
              // studi,
              // mahasiswa,
              listNIMMahasiswa,
              listNamaMahasiswa
            }
        })
    }
    catch (error) {
        res.status(error.status).json({ error })
    }
}