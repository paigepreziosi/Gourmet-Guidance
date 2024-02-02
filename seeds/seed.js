const sequelize = require('../config/connection');
const { Store, User, Menu } = require('../models');

const storeData = require('./storeData.json');
const menuData = require('./menuData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    // for (const menu of menuData) {
    //   await Menu.create({
    //     ...menu,
    //   });
    // }
  
    // for (const store of storeData) {
    //   await Store.create({
    //     ...store,
    //   });
    // }
  
    process.exit(0);
  };
  seedDatabase();

module.exports = seedDatabase;