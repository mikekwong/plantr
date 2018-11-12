const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr')

let Gardener = db.define('gardeners', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
})

let Plot = db.define('plots', {
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
})

let Vegetable = db.define('vegetables', {
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  planted_on: {
    type: Sequelize.DATE
  }
})

Plot.belongsTo(Gardener)
Gardener.hasOne(Plot)

Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' })
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' })

Gardener.belongsTo(Vegetable, { as: 'favorite_vegetable' })

Vegetable.create({
  name: 'Carrot',
  color: 'orange',
  planted_on: Date.now()
})

module.exports = { db, Vegetable }
