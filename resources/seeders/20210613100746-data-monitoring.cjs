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
    // await queryInterface.sequelize.query(
    //   `insert into "Studi" (id, id_perkuliahan, id_mahasiswa)
    //   values (1, 5, '181524002'),
    //   (2, 5, '181524003'),
    //   (3, 5, '181524004'),
    //   (4, 5, '181524005'),
    //   (5, 5, '181524006'),
    //   (6, 5, '181524007'),
    //   (7, 5, '181524008'),
    //   (8, 5, '181524009'),
    //   (9, 5, '181524010'),
    //   (10, 5, '181524012'),
    //   (11, 5, '181524013'),
    //   (12, 5, '181524014'),
    //   (13, 5, '181524015'),
    //   (14, 5, '181524016'),
    //   (15, 5, '181524017'),
    //   (16, 5, '181524020'),
    //   (17, 5, '181524021'),
    //   (18, 5, '181524022'),
    //   (19, 5, '181524023'),
    //   (20, 5, '181524025'),
    //   (21, 5, '181524026'),
    //   (22, 5, '181524027'),
    //   (23, 5, '181524028'),
    //   (24, 5, '181524029'),
    //   (25, 5, '181524030'),
    //   (26, 5, '181524031'),
    //   (27, 5, '181524032')`
    // )
    // await queryInterface.sequelize.query(
    //   `insert into "Pengajar" (nip, id_perkuliahan)
    //   values ('1011', 5)`
    // )
    await queryInterface.sequelize.query(
      `insert into "Tugas" (id, nama_tugas, status_progress, status_durasi, status_skala,
        status_catatan, status_lampiran, id_perkuliahan, nip)
      values (1, 'W1 - Polymorphism', true, true, true, true, true, 5, '196610181995121000')`
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.sequelize.query(`
    //   DELETE FROM "Tugas";
    // `)
    // await queryInterface.sequelize.query(`
    //   DELETE FROM "Pengajar";
    // `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Studi";
    `)
  }
};
