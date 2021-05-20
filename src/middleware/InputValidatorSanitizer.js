import { body, param } from 'express-validator'
import * as DosenDAO from '../dao/Dosen'
import * as MahasiswaDAO from '../dao/Mahasiswa'
import * as TugasDAO from '../dao/Tugas'
import * as SubtugasDAO from '../dao/Subtugas'
import * as KriteriaDAO from '../dao/Kriteria'

// CATATAN : File ini berisi middleware untuk memvalidasi dan sanitasi inputan yang dikirim oleh user

/* Validator dan Sanitizer untuk Dosen */

export const postNewDosen = [
  body('NIP', 'NIP wajib diisi').exists().bail(),
  body('NIP').custom((value) => {
    return DosenDAO.findDosenByNIP(value).then((dosen) => {
      if (dosen) {
        return Promise.reject(new Error('NIP sudah terdaftar'))
      }
    })
  }),
  body('namaDosen', 'Nama dosen wajib diisi').exists(),
  body('email', 'format email tidak valid').isEmail(),
  body('permission', 'permission wajib diisi').exists(),
  body('jabatan', 'format jabatan tidak valid atau jabatan tidak ada').isIn([
    'wali-kelas',
    'kajur',
    'kaprodi',
    'dosen-pengampu'
  ])
]

/* Validator dan Sanitizer untuk Mahasiswa */

export const postNewMahasiswa = [
  body('NIM', 'NIM wajib diisi').exists().bail(),
  body('NIM').custom((value) => {
    return MahasiswaDAO.findMahasiswaByNIM(value).then((mhs) => {
      if (mhs) {
        return Promise.reject(new Error('NIM sudah terdaftar'))
      }
    })
  }),
  body('namaMahasiswa', 'Nama Mahasiswa wajib diisi').exists(),
  body('angkatan', 'Angkatan wajib diisi').exists(),
  body('tingkat', 'Tingkat wajib diisi').exists(),
  body('email', 'Format email tidak valid').isEmail(),
  body('status', 'Status wajib diisi').exists()
  // body('nomorHp', 'Nomor Hp tidak valid').isLength({ min: 11 })
]

export const updateNomorHpMahasiswa = [
  body('nomorHP', 'Nomor HP wajib diisi').exists()
  // body('nomorHP', 'Nomor HP harus maksimal 13 angka').isLength({ max: 13}),
  // body('nomorHP', 'Nomor HP harus numerik').isNumeric(),
]

export const createUser = [
  body('noInduk', 'No induk wajib diisi').exists().bail(),
  body('jenisNoInduk', 'Jenis no iduk wajib diisi').exists(),
  body('nama', 'Nama wajib diisi').exists(),
  body('email', 'Format email tidak valid').isEmail(),
  body('role', 'Role wajib diisi').exists()
]

export const deleteDosenByNIP = [
  param('NIP').custom((value) => {
    return DosenDAO.findDosenByNIP(value).then((dosen) => {
      if (dosen) {
        return Promise.reject(
          new Error('Dosen dengan NIP tersebut tidak ditemukan')
        )
      }
    })
  })
]

export const postNewTugas = [
  body('id_tugas', 'id_tugas wajib diisi').exists().bail(),
  body('id_tugas').custom((value) => {
    return TugasDAO.findTugasById(value).then((tugas) => {
      if (tugas) {
        return Promise.reject(new Error('id_tugas sudah terdaftar'))
      }
    })
  }),
  // kalo lagi manual baris dibawah ini dicomment
  body('id_perkuliahan', 'id_perkuliahan wajib diisi').exists(),
  // body('id_perkuliahan').custom((value) => {
  //   return PerkuliahanDAO.findPerkuliahanById(value).then((perkuliahan) => {
  //     if (!perkuliahan) {
  //       return Promise.reject(new Error('id_perkuliahan tidak terdaftar'))
  //     }
  //   })
  // }),
  body('nama_tugas', 'nama_tugas wajib diisi').exists(),
]

export const postNewSubtugas = [
  body('id_subtugas', 'id_subtugas wajib diisi').exists().bail(),
  body('id_subtugas').custom((value) => {
    return SubtugasDAO.findSubtugasById(value).then((subtugas) => {
      if (subtugas) {
        return Promise.reject(new Error('id_subtugas sudah terdaftar'))
      }
    })
  }),
  body('nama_subtugas', 'nama_subtugas wajib diisi').exists(),
  body('tenggat', 'tenggat wajib diisi').isDate().exists(),
  body('id_tugas', 'id_subtugas wajib diisi').exists(),
  body('id_tugas').custom((value) => {
    return TugasDAO.findTugasById(value).then((tugas) => {
      if (!tugas) {
        return Promise.reject(new Error('id_tugas tidak terdaftar'))
      }
    })
  }),
  body('id_studi', 'id_subtugas wajib diisi').exists()
  // body('id_studi').custom((value) => {
  //   return StudiDAO.findStudiById(value).then((studi) => {
  //     if (!studi) {
  //       return Promise.reject(new Error('id_studi tidak terdaftar'))
  //     }
  //   })
  // }),
]

export const postNewKriteria = [
  body('id_kriteria', 'id_kriteria wajib diisi').exists().bail(),
  body('id_kriteria').custom((value) => {
    return KriteriaDAO.findKriteriaById(value).then((kriteria) => {
      if (kriteria) {
        return Promise.reject(new Error('id_kriteria sudah terdaftar'))
      }
    })
  }),
  body('id_subtugas', 'id_subtugas wajib diisi').exists(),
  body('id_subtugas').custom((value) => {
    return SubtugasDAO.findSubtugasById(value).then((subtugas) => {
      if (!subtugas) {
        return Promise.reject(new Error('id_subtugas tidak terdaftar'))
      }
    })
  }),
  body('nim', 'nim wajib diisi').exists(),
  body('nim').custom((value) => {
    return MahasiswaDAO.findOneMahasiswaByNIM(value).then((mahasiswa) => {
      if (!mahasiswa) {
        return Promise.reject(new Error('mahasiswa tidak terdaftar'))
      }
    })
  })
]