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
      values ('Another Type of Employee', false, 1, 1),
      ('Painting Shapes', false, 1, 1),
      ('Polymorphic Sorting', false, 1, 1),
      ('Searching and Sorting an Integer List', false, 1, 1),
      ('Timing Searching and Sorting Algorithms', false, 1, 1),
      ('Coloring a Moveable Circle', false, 1, 1),
      ('Speed Control', false, 1, 1),
      ('Adapter', false, 2, 1),
      ('Bridge', false, 2, 1),
      ('Composite', false, 2, 1),
      ('Decorator', false, 2, 1),
      ('Facade', false, 2, 1),
      ('Flyweight', false, 2, 1),
      ('Proxy', false, 2, 1),
      ('Abstract Factory', false, 2, 1),
      ('Builder', false, 2, 1),
      ('Factory Method', false, 2, 1),
      ('Prototype', false, 2, 1),
      ('Singleton', false, 2, 1),
      ('Memento', false, 2, 1),
      ('Observer', false, 2, 1),
      ('State', false, 2, 1),
      ('Strategy', false, 2, 1),
      ('Template Method', false, 2, 1),
      ('Visitor', false, 2, 1),
      ('Chain of Responsibility', false, 2, 1),
      ('Command', false, 2, 1),
      ('Interpreter', false, 2, 1),
      ('Iterator', false, 2, 1),
      ('Mediator', false, 2, 1)`
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
