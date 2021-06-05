import Sequelize from 'sequelize'
import db from '../db'

const Tugas = db.define('Tugas', {
  id_tugas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nama_tugas: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status_progress: {
    type: Sequelize.BOOLEAN
  },
  status_durasi: {
    type: Sequelize.BOOLEAN
  },
  status_skala: {
    type: Sequelize.BOOLEAN
  },
  status_catatan: {
    type: Sequelize.BOOLEAN
  },
  status_lampiran: {
    type: Sequelize.BOOLEAN
  }
})

export default Tugas
