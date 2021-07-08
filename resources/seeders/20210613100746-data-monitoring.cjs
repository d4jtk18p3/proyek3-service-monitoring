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
      values ('Another Type of Employee',false,1,1),
      ('Painting Shapes',false,1,1),
      ('Polymorphic Sorting',false,1,1),
      ('Searching and Sorting an Integer List',false,1,1),
      ('Timing Searching and Sorting Algorithms',false,1,1),
      ('Coloring a Moveable Circle',false,1,1),
      ('Speed Control',false,1,1),
      ('Adapter',false,2,1),
      ('Bridge',false,2,1),
      ('Composite',false,2,1),
      ('Decorator',false,2,1),
      ('Facade',false,2,1),
      ('Flyweight',false,2,1),
      ('Proxy',false,2,1),
      ('Abstract Factory',false,2,1),
      ('Builder',false,2,1),
      ('Factory Method',false,2,1),
      ('Prototype',false,2,1),
      ('Singleton',false,2,1),
      ('Memento',false,2,1),
      ('Observer',false,2,1),
      ('State',false,2,1),
      ('Strategy',false,2,1),
      ('Template Method',false,2,1),
      ('Visitor',false,2,1),
      ('Chain of Responsibility',false,2,1),
      ('Command',false,2,1),
      ('Interpreter',false,2,1),
      ('Iterator',false,2,1),
      ('Mediator',false,2,1),
      ('Another Type of Employee',false,1,2),
      ('Painting Shapes',false,1,2),
      ('Polymorphic Sorting',false,1,2),
      ('Searching and Sorting an Integer List',false,1,2),
      ('Timing Searching and Sorting Algorithms',false,1,2),
      ('Coloring a Moveable Circle',false,1,2),
      ('Speed Control',false,1,2),
      ('Adapter',false,2,2),
      ('Bridge',false,2,2),
      ('Composite',false,2,2),
      ('Decorator',false,2,2),
      ('Facade',false,2,2),
      ('Flyweight',false,2,2),
      ('Proxy',false,2,2),
      ('Abstract Factory',false,2,2),
      ('Builder',false,2,2),
      ('Factory Method',false,2,2),
      ('Prototype',false,2,2),
      ('Singleton',false,2,2),
      ('Memento',false,2,2),
      ('Observer',false,2,2),
      ('State',false,2,2),
      ('Strategy',false,2,2),
      ('Template Method',false,2,2),
      ('Visitor',false,2,2),
      ('Chain of Responsibility',false,2,2),
      ('Command',false,2,2),
      ('Interpreter',false,2,2),
      ('Iterator',false,2,2),
      ('Mediator',false,2,2),
      ('Another Type of Employee',false,1,3),
      ('Painting Shapes',false,1,3),
      ('Polymorphic Sorting',false,1,3),
      ('Searching and Sorting an Integer List',false,1,3),
      ('Timing Searching and Sorting Algorithms',false,1,3),
      ('Coloring a Moveable Circle',false,1,3),
      ('Speed Control',false,1,3),
      ('Adapter',false,2,3),
      ('Bridge',false,2,3),
      ('Composite',false,2,3),
      ('Decorator',false,2,3),
      ('Facade',false,2,3),
      ('Flyweight',false,2,3),
      ('Proxy',false,2,3),
      ('Abstract Factory',false,2,3),
      ('Builder',false,2,3),
      ('Factory Method',false,2,3),
      ('Prototype',false,2,3),
      ('Singleton',false,2,3),
      ('Memento',false,2,3),
      ('Observer',false,2,3),
      ('State',false,2,3),
      ('Strategy',false,2,3),
      ('Template Method',false,2,3),
      ('Visitor',false,2,3),
      ('Chain of Responsibility',false,2,3),
      ('Command',false,2,3),
      ('Interpreter',false,2,3),
      ('Iterator',false,2,3),
      ('Mediator',false,2,3),
      ('Another Type of Employee',false,1,4),
      ('Painting Shapes',false,1,4),
      ('Polymorphic Sorting',false,1,4),
      ('Searching and Sorting an Integer List',false,1,4),
      ('Timing Searching and Sorting Algorithms',false,1,4),
      ('Coloring a Moveable Circle',false,1,4),
      ('Speed Control',false,1,4),
      ('Adapter',false,2,4),
      ('Bridge',false,2,4),
      ('Composite',false,2,4),
      ('Decorator',false,2,4),
      ('Facade',false,2,4),
      ('Flyweight',false,2,4),
      ('Proxy',false,2,4),
      ('Abstract Factory',false,2,4),
      ('Builder',false,2,4),
      ('Factory Method',false,2,4),
      ('Prototype',false,2,4),
      ('Singleton',false,2,4),
      ('Memento',false,2,4),
      ('Observer',false,2,4),
      ('State',false,2,4),
      ('Strategy',false,2,4),
      ('Template Method',false,2,4),
      ('Visitor',false,2,4),
      ('Chain of Responsibility',false,2,4),
      ('Command',false,2,4),
      ('Interpreter',false,2,4),
      ('Iterator',false,2,4),
      ('Mediator',false,2,4),
      ('Another Type of Employee',false,1,5),
      ('Painting Shapes',false,1,5),
      ('Polymorphic Sorting',false,1,5),
      ('Searching and Sorting an Integer List',false,1,5),
      ('Timing Searching and Sorting Algorithms',false,1,5),
      ('Coloring a Moveable Circle',false,1,5),
      ('Speed Control',false,1,5),
      ('Adapter',false,2,5),
      ('Bridge',false,2,5),
      ('Composite',false,2,5),
      ('Decorator',false,2,5),
      ('Facade',false,2,5),
      ('Flyweight',false,2,5),
      ('Proxy',false,2,5),
      ('Abstract Factory',false,2,5),
      ('Builder',false,2,5),
      ('Factory Method',false,2,5),
      ('Prototype',false,2,5),
      ('Singleton',false,2,5),
      ('Memento',false,2,5),
      ('Observer',false,2,5),
      ('State',false,2,5),
      ('Strategy',false,2,5),
      ('Template Method',false,2,5),
      ('Visitor',false,2,5),
      ('Chain of Responsibility',false,2,5),
      ('Command',false,2,5),
      ('Interpreter',false,2,5),
      ('Iterator',false,2,5), 
      ('Mediator',false,2,5)
      `
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
