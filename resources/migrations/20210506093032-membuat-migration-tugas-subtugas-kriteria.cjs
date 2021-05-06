'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tugas', {
      id_tugas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nama_tugas: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
    await queryInterface.createTable('Subtugas', {
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
    });
    await queryInterface.createTable('Kriteria', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Kriteria');
    await queryInterface.dropTable('Subtugas');
    await queryInterface.dropTable('Tugas');
  }
};
