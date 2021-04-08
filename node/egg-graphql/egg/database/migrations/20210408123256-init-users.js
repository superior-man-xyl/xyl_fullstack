'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {INTEGER,DATE,STRING} = Sequelize
    await queryInterface.createTable('users',{
      id:{ type:INTEGER,primaryKey:true,autoIncrement:true },
      name:STRING(30),
      age:INTEGER,
      created_at:DATE,//日期类型
      updated_at:DATE
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
