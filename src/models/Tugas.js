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
  }
})

export default Tugas
