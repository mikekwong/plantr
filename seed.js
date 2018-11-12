const Sequelize = require('sequelize')
const { db, Vegetable } = require('./models')

db.sync({ force: false })
.then(() => {
  .then(() => {
  console.log('Database synced!')
  // db.close() // only if using a version of node without `finally`
})
.catch(err => {
  console.log('Disaster! Something went wrong! ')
  console.log(err)
  // db.close() // only if using a version of node without `finally`
})
.finally(() => {
  // only if using a version of node WITH `finally`
  db.close()
})
})
Vegetable.create({
  name: 'Carrot',
  color: 'orange',
  planted_on: Date.now()
})


