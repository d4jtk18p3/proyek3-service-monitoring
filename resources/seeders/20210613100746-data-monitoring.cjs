'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.sequelize.query(
      `insert into "Tugas" (id, nama_tugas, status_progress, status_durasi, status_skala,
        status_catatan, status_lampiran, id_perkuliahan, nip)
      values (1, 'W1 - Polymorphism', true, true, true, true, true, 5, '196810141993032000'),
      (2, 'W1 - Design pattern', true, true, true, true, true, 5, '196810141993032000')
      `
    )
    await queryInterface.sequelize.query(
      `insert into "Subtugas" (nama_subtugas, status_subtugas, id_tugas, id_studi)
      values ('subtugas1', 'selesai', 1, 1)`
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.sequelize.query(`
      DELETE FROM "Subtugas"
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Tugas";
    `)
    // await queryInterface.sequelize.query(`
    //   DELETE FROM "Pengajar";
    // `)
    // await queryInterface.sequelize.query(`
    //   DELETE FROM "Tugas";
    // `)
  }
};
