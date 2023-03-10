const { Sequelize, DataTypes, Op, json } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'por077347018',
  database: 'cc13_lab01',
  dialect: 'mysql'
});

const Category = sequelize.define(
  'Category',
  {
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    CategoryName: DataTypes.STRING,
    Description: DataTypes.STRING
  },
  {
    timestamps: false
  }
);

const nice = (jss) => console.log(JSON.stringify(jss, null, 2));
// Category.findAll().then(console.log)

// Category.findAll().then(rs => console.log(JSON.stringify(rs, null, 2)))
// Category.findAll().then(nice)

// Category.update(
//   { CategoryName: 'Curry', Description: 'good curry' },
//   { where: { CategoryID: 9 } }
// ).then(nice);

// Category.destroy({
//   where: { CategoryID: 9 }
// }).then(nice);

// Category.bulkCreate([
//   { CategoryName: 'curry 01', Description: 'good curry 01' },
//   { CategoryName: 'curry 02', Description: 'good curry 02' },
//   { CategoryName: 'curry 03', Description: 'good curry 03' },
//   { CategoryName: 'curry 04', Description: 'good curry 04' },
//   { CategoryName: 'curry 05', Description: 'good curry 05' }
// ]).then(nice);

// Category.destroy({
//   where: { CategoryID: { [Op.gt]: 9 } }
// });

// Category.findByPk(4).then(nice);

// Category.findAndCountAll({}).then(nice);

const Product = sequelize.define(
  'product',
  {
    ProductID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    ProductName: DataTypes.STRING,
    SupplierID: DataTypes.INTEGER,
    CategoryID: DataTypes.INTEGER,
    Unit: DataTypes.STRING,
    Price: DataTypes.DECIMAL(10, 2)
  },
  {
    timestamps: false
  }
);

// Product.findAll({
//   attributes: [
//     'CategoryID',
//     [sequelize.fn('COUNT', sequelize.col('ProductID')), 'numProduct']
//   ],
//   where: {},
//   order: [['price', 'DESC']],
//   group: 'CategoryID'
// }).then(nice);

// Product.findAll({
//   attributes: [
//     [sequelize.fn('COUNT', sequelize.col('ProductID')), 'numProduct']
//   ],
//   where: { price: { [Op.gt]: 100 } },
//   raw: true,
//   nest:true
// }).then
//.then((rs) => console.log(JSON.parse(JSON.stringify(rs))[0].numProduct));

const Supplier = sequelize.define(
  'supplier',
  {
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    SupplierName: DataTypes.STRING,
    ContactName: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Country: DataTypes.STRING,
    Phone: DataTypes.STRING
  },
  {
    timestamps: false
  }
);

// let newCat = {
//     CategoryName: 'NewCat_01',
//     Description: 'Detail Note...'
// }

// Category.create(newCat).then(nice)
