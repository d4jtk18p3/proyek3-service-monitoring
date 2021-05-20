import Sequelize from 'sequelize'
import db from '../db'

const Kriteria = db.define('Kriteria', {
  id_kriteria : {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
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
  },
  id_subtugas: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  nim: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default Kriteria
