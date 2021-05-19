import Sequelize from 'sequelize'
import db from '../db'

const Kriteria = db.define('Kriteria', {
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

export default Kriteria
