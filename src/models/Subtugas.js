import Sequelize from 'sequelize'
import db from '../db'

const Subtugas = db.define('Subtugas', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nama_subtugas: {
    type: Sequelize.STRING
  },
  progress: {
    type: Sequelize.INTEGER
  },
  durasi: {
    type: Sequelize.DATE
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
    type: Sequelize.DATE
  },
  status_subtugas: {
    type: Sequelize.STRING
  },
  tenggat: {
    type: Sequelize.DATE
  },
  id_tugas: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_studi: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

export default Subtugas
