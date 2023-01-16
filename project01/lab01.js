const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'por077347018',
  database: 'cc13_lab01',
  dialect: 'mysql'
});

const PersonInRoom = sequelize.define(
  'PersonInRoom',
  {
    firstName: DataTypes.STRING,
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // freezeTableName: true
    // tableName: 'Users'
    //underscored: true
    timestamps: false
  }
);

const Product = sequelize.define(
  'Product',
  {
    productId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    Note: DataTypes.STRING
  },
  {
    timestamps: false
  }
);

// Product.create({
//   name: 'Excel',
//   price: 200.75,
//   note: 'Excel Book'
// }).then((rs) => console.log(rs));

// PersonInRoom.sync({ force: true });
// sequelize.sync({ force: true });

// sequelize.query('Create Database cc13_lab01').then(console.log);

// sequelize
//   .query('select * from products')
//   .then((rs) => console.log(rs[0][3].name));

// sequelize
//   .authenticate()
//   .then(() => console.log('db ok'))
//   .catch((err) => console.log(err.message));

// async function run() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// run();
