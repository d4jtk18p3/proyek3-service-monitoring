import Sequelize from 'sequelize'
import db from '../db'

const Subtugas = db.define('Subtugas', {
  id_subtugas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nama_subtugas: {
    type: Sequelize.STRING
  },
  progress: {
    type: Sequelize.INTEGER
  },
  durasi: {
    type: Sequelize.INTEGER
  },
  skala_pemahaman: {
    type: Sequelize.STRING
  },
  catatan: {
    type: Sequelize.INTEGER
  },
  lampiran: {
    type: Sequelize.STRING
  },
  waktu_selesai: {
    type: Sequelize.STRING
  },
  status_subtugas: {
    type: Sequelize.STRING
  },
  tenggat: {
    type: Sequelize.STRING
  }
})

export default Subtugas
