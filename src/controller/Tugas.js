import * as TugasDAO from '../dao/Tugas'
import * as StudiDAO from '../dao/Studi'
import * as PerkuliahaDAO from '../dao/Perkuliahan'
import * as MahasiswaDAO from '../dao/Mahasiswa'
import { validationResult } from 'express-validator/check'

export const postNewTugas = async (req, res, next) => {
  try {
    const {
      nama_tugas,
      status_progress,
      status_durasi,
      status_skala,
      status_catatan,
      status_lampiran,
      id_perkuliahan,
      nip
    } = req.body
    const now = new Date()
    const { createdAt, updatedAt} = now
    const error = validationResult(req)
      if (!error.isEmpty()) {
        error.status = 400
        throw error
      }
      const tugas = await TugasDAO.insertOneTugas(
        nama_tugas,
        status_progress,
        status_durasi,
        status_skala,
        status_catatan,
        status_lampiran,
        createdAt,
        updatedAt,
        id_perkuliahan,
        nip)
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

export const getAllTugasMahasiswa = async (req, res) => {
  const nim = req.params.nim
  try {
    const tugas = await TugasDAO.getAllTugasMahasiswa(nim)
    res.json({
      message: `Get All Tugas ${nim}`,
      data: {
        tugas
      }
    })
  } catch (error) {
    res.status(error.status).json({ error })
  }
}

export const getAllTugasMahasiswaByid_tugas = async (req, res) => {
  const id_tugas = req.params.id
  try {
    const mahasiswa = await TugasDAO.getAllTugasMahasiswaByid_tugas(id_tugas)
    res.json({
      message: 'Get All Tugas Mahasiswa by id tugas berhasil',
      data: {
        mahasiswa
      }
    })
  }
  catch (error) {
    res.status(error.status).json ({ error })
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
        const id_matkul = req.params.id_matkul
        const id_perkuliahan = req.params.id_perkuliahan
        const perkuliahan = await PerkuliahaDAO.findPerkuliahanByMatkul(id_matkul)
        var i,j
        var listTugas = []
        for (i = 0; i < perkuliahan.length; i++){
          var tugas = await TugasDAO.findTugasByPerkuliahan(perkuliahan[i].id)
          for (j = 0; j < tugas.length; j++){
            if (tugas[j].id_perkuliahan == id_perkuliahan){
              listTugas.push({
                id_tugas: tugas[j].id,
                nama_tugas: tugas[j].nama_tugas})
            }
          }
        }
        res.status(200).json({
            message: 'get tugas by matkul sukses',
            data: {
              perkuliahan,
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
        var listIdStudi = []
        for (i = 0; i < studi.length; i++){
          var mahasiswa = await MahasiswaDAO.findOneMahasiswaByNIM(studi[i].id_mahasiswa)
          listNamaMahasiswa.push(mahasiswa.nama)
          listNIMMahasiswa.push(mahasiswa.nim)
          listIdStudi.push(studi[i].id)
        }
        res.status(200).json({
            message: 'get mahasiswa by matkul sukses',
            data: {
              // tugas,
              // perkuliahan,
              // studi,
              // mahasiswa,
              listIdStudi,
              listNIMMahasiswa,
              listNamaMahasiswa
            }
        })
    }
    catch (error) {
        res.status(error.status).json({ error })
    }
}

export const getKriteriaOfTugas = async (req, res, next) => {
  try {
      const id_tugas = req.params.id
      const tugas = await TugasDAO.findTugasById(id_tugas)
      var progress, durasi, skala, catatan, lampiran
      progress = tugas.status_progress
      durasi = tugas.status_durasi
      skala = tugas.status_skala
      catatan = tugas.status_catatan
      lampiran = tugas.status_lampiran

      res.status(200).json({
          message: 'get kriteria by tugas sukses',
          data: {
            progress,
            durasi,
            skala,
            catatan,
            lampiran
          }
      })
  }
  catch (error) {
      next(error)
  }
}
