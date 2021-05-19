import { body, param } from 'express-validator'
import * as DosenDAO from '../dao/Dosen'
import * as MahasiswaDAO from '../dao/Mahasiswa'

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
  body('jabatan', 'format jabatan tidak valid atau jabatan tidak ada').isIn(['wali-kelas', 'kajur', 'kaprodi', 'dosen-pengampu'])
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

export const createUser = [
  body('noInduk', 'No induk wajib diisi').exists().bail(),
  body('jenisNoInduk', 'Jenis no iduk wajib diisi').exists(),
  body('nama', 'Nama wajib diisi').exists(),
  body('email', 'Format email tidak valid').isEmail(),
  body('role', 'Role wajib diisi').exists(),
  body('permissions', 'Permission wajib diisi').exists()
]

export const deleteDosenByNIP = [
  param('NIP').custom((value) => {
    return DosenDAO.findDosenByNIP(value).then((dosen) => {
      if (dosen) {
        return Promise.reject(new Error('Dosen dengan NIP tersebut tidak ditemukan'))
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
  body('nama_tugas', 'nama_tugas wajib diisi').exists(),
  body('id_perkuliahan', 'id_perkuliahan wajib diisi').exists(),
]
