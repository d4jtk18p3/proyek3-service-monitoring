'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'Subtugas',
        'id_tugas', {
            type: Sequelize.INTEGER,
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
            references: {
                model: 'Studi',
                key: 'id'
            },
        });
    await queryInterface.addColumn(
        'Tugas',
        'id_perkuliahan', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Perkuliahan',
                key: 'id'
            }
        });
    await queryInterface.addColumn(
        'Kriteria',
        'id_subtugas', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Subtugas',
                key: 'id_subtugas'
            }
        });
    await queryInterface.addColumn(
        'Kriteria',
        'nim', {
            type: Sequelize.STRING(15),
            allowNull: false,
            references: {
                model: 'Mahasiswa',
                key: 'nim'
            }
        });
    await queryInterface.addConstraint('Kriteria', {
        fields: ['id_subtugas', 'nim'],
        type: 'Unique',
        name: 'c_unique0_kriteria'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Kriteria', 'c_unique0_kriteria')
    await queryInterface.removeColumn('Kriteria', 'nim');
    await queryInterface.removeColumn('Kriteria', 'id_subtugas')
    await queryInterface.removeColumn('Tugas', 'id_perkuliahan')
    await queryInterface.removeColumn('Subtugas', 'id_studi')
    await queryInterface.removeColumn('Subtugas', 'id_tugas')
  }
};
