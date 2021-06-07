import Sequelize from 'sequelize'
import db from '../db'

const Prodi = db.define('Program_Studi', {
  kode_prodi: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  nip: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  kode_jurusan: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default Prodi
