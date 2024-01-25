module.exports = (sequelize, Sequelize) => {
  const entities = {};
  
    entities.authentication = sequelize.define('authentication', {
    
    username: {
      type: Sequelize.STRING
    },
    
    password: {
      type: Sequelize.STRING
    }
    
    });
    
    entities.product = sequelize.define('product', {
    
    price: {
      type: Sequelize.INTEGER
    },
    
    name: {
      type: Sequelize.STRING
    }
    
    });
    
    entities.cart = sequelize.define('cart', {
    
    height: {
      type: Sequelize.INTEGER
    }
    
    });
    
  return entities;
};
