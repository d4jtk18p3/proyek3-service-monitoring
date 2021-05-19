'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'Subtugas',
        'id_tugas', {
            type: Sequelize.Integer,
            allowNull: false,
            references: {
                model: 'Tugas',
                key: 'id_tugas'
            },
        });
    await queryInterface.addColumn(
        'Subtugas',
        'id_studi', {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: 'Studi',
                key: 'id_studi'
            },
        });
    await queryInterface.addColumn(
        'Tugas',
        'id_perkuliahan', {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: 'Perkuliahan',
                key: 'id_perkuliahan'
            }
        });
    await queryInterface.addColumn(
        'Kriteria',
        'id_subtugas', {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: 'Subtugas',
                key: 'id_subtugas'
            }
        });
    await queryInterface.addColumn(
        'Kriteria',
        'nim', {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: 'Mahasiswa',
                key: 'nim'
            }
        });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Kriteria', 'nim');
    await queryInterface.removeColumn('Kriteria', 'id_subtugas')
    await queryInterface.removeColumn('Tugas', 'id_perkuliahan')
    await queryInterface.removeColumn('Subtugas', 'id_studi')
    await queryInterface.removeColumn('Subtugas', 'id_tugas')
  }
};
