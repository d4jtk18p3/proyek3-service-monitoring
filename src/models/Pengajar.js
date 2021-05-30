import db from '../db'
import Sequelize from 'sequelize'

const Pengajar = db.define('Pengajar', {
    nip: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
    id_perkuliahan: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
})

export default Pengajar
