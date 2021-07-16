import Mahasiswa from '../models/Mahasiswa'
import sequelize from '../db.js'

export const findOneMahasiswaByNIM = async (nim) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      where: {
        nim: nim
      }
    })
    return mahasiswa[0]
  } catch (error) {
    console.error(error)
  }
}

export const findAllMahasiswa = async () => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      order: [['nim', 'ASC']]
    })
    return mahasiswa
  } catch (error) {
    return Promise.reject(new Error('Get all mahasiswa'))
  }
}

export const findMahasiswaByName = async (nama) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      where: {
        nama_mahasiswa: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('nama_mahasiswa')),
          'LIKE',
          '%' + nama.toLowerCase() + '%'
        )
      },
      order: [['nama_mahasiswa', 'ASC']]
    })
    return mahasiswa
  } catch (error) {
    console.error(error)
  }
}

export const findMahasiswaByNIM = async (NIM) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      where: {
        NIM: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('NIM')),
          'LIKE',
          '%' + NIM.toLowerCase() + '%'
        )
      },
      order: [['NIM', 'ASC']]
    })
    return mahasiswa
  } catch (error) {
    console.error(error)
  }
}

export const insertOneMahasiswa = async (
  NIM,
  namaMahasiswa,
  kodeKelas,
  email,
  nomorHp,
  urlFoto
) => {
  try {
    const mahasiswa = await Mahasiswa.create({
      nim: NIM,
      nama: namaMahasiswa,
      kode_kelas: kodeKelas,
      email,
      nomor_ponsel: nomorHp,
      url_foto: urlFoto
    })
    return mahasiswa
  } catch (error) {
    console.error(error)
  }
}

export const updateNomorHpMahasiswa = async (NIM, nomorHP) => {
  try {
    const mahasiswa = await Mahasiswa.update(
      {
        nomor_hp: nomorHP
      },
      {
        where: {
          NIM
        },
        silent: true
      }
    )
    return mahasiswa[0]
  } catch (error) {
    console.error(error)
  }
}

export const deleteMahasiswabyId = async (mahasiswaId) => {
  try {
    const result = await Mahasiswa.destroy({
      where: {
        id_mahasiswa: mahasiswaId
      }
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

export const findMahasiswaByClass = async (kode_kelas) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      where: {
        kode_kelas
      },
      order: [['nama_mahasiswa', 'ASC']]
    })
    return mahasiswa
  } catch (error) {
    console.error(error)
  }
}