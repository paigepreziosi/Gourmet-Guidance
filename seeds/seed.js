const sequelize = require('../config/connection');
const { Chef, Restaurant } = require('../models');

const chefData = require('./chefData.json');
const restaurantData = require('./restaurantData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
  };
  seedDatabase();
