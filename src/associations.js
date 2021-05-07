const Tugas = require('./models/Tugas')
const Subtugas = require('./models/Subtugas')
const Kriteria = require('./models/Kriteria')
const setAssociations = () => {
  Tugas.hasMany(Subtugas, {
    foreignKey: 'id_tugas'
  })
  Subtugas.belongsToMany(Kriteria, {
    through: 'id_subtugas'
  })
}

module.exports = setAssociations
