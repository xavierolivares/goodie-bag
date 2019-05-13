const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'png'
  }
  // define your model here!
});
